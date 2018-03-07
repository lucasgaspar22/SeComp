(function() {
    'use strict';

    angular
        .module('secomp.login')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$state', 'ngFB', '$ionicLoading', '$firebaseAuth', '$firebaseObject','$rootScope', '$timeout', 'fb', '$q','ionicToast'];

    function LoginService($state, ngFB, $ionicLoading, $firebaseAuth, $firebaseObject, $rootScope, $timeout, fb, $q, ionicToast){
        
       var service = {
            CustomLogin: CustomLogin,
            GetCurrentUser: GetCurrentUser,
            RegisterUser: RegisterUser,
            setScore: setScore,
            User: $rootScope.currentUser
        };
        return service;

        var uEmail;
        var uPassword;

        

        function CustomLogin(email, password) {
            if(email ==null | password == null){
                ionicToast.show('Preencha todos os campos!', 'middle', false, 1500);
                return;
            }
           
            localStorage.setItem("uPassword",password);
            localStorage.setItem("uEmail",email);
        

            $ionicLoading.show({
                showBackdrop: false,
                 template: '<p>Carregando...</p><ion-spinner icon="android" style="stroke: #1D60AF;fill:#1D60AF;"></ion-spinner>'
            });

            $firebaseAuth().$signInWithEmailAndPassword(email, password).then(function(authData) {
                $rootScope.currentUser = GetCurrentUser(authData.uid);
                
                $timeout(function() {
                    $ionicLoading.hide();
                    $state.go('app.tab.home', {});
                }, 1000);

            }).catch(function(error) {
                showToast();
               
                $ionicLoading.hide();
                
                console.log(error);
            });
        }

         function showToast(){ 
            ionicToast.show('Usuário ou senha inválido', 'middle', false, 1500);
        }

        function setScore(score){
            var deffered = $q.defer();
              var ref = fb.child('/users/'+$rootScope.currentUser.$id);
              ref.once("value")
                .then(function(snapshot) {
                    ref.set( {'displayName':localStorage.getItem("uName"),
                              'email': localStorage.getItem("uEmail"),
                              'score':score});
                    deffered.resolve(snapshot);
                });
            return deffered.promise;
        }


        function GetCurrentUser(userId) {
            var query = fb.child('/users/' + userId);
            var currentUser = $firebaseObject(query)
            $rootScope.currentUser = currentUser;
            return currentUser;
        }


        function SaveUser(authData) {

            var deffered = $q.defer();
            
            var uid = authData.uid;
            var user = {
                displayName: authData.displayName,
                name: authData.displayName,
                photoURL: authData.photoURL,
                email: authData.email,
                emailVerified: authData.emailVerified,
                providerId: authData.providerData[0].providerId
            };

            var ref = fb.child('/users/' + uid);
            ref.once("value")
                .then(function(snapshot) {
                    if (snapshot.exists()) {
                        console.log('User already exists');
                    } else {
                        ref.set(user);
                    }

                    deffered.resolve(snapshot);
                });

            return deffered.promise;
        };

        function RegisterUser(user) {
            var deffered = $q.defer();
            $ionicLoading.show();
            $firebaseAuth().$createUserWithEmailAndPassword(user.email, user.password).then(function(authData) {
                var newUser = {
                    name: user.name,
                    displayName:user.name,
                    email: user.email,
                    score: 0,
                    providerId: authData.providerData[0].providerId
                };


                var userId = authData.uid;
                var ref = fb.child('/users/' + userId);
                ref.once("value")
                    .then(function(snapshot) {
                        if (snapshot.exists()) {
                           ionicToast.show('Este usuário já existe', 'middle', false, 1500);
                        } else {
                            ref.set(newUser).then(function(user){
                                $rootScope.currentUser = GetCurrentUser(userId);
                            })
                        }

                        deffered.resolve(snapshot);
                        
                        localStorage.setItem("uPassword",user.password);
                        localStorage.setItem("uEmail",user.email);
                        localStorage.setItem("uName",user.name);
                        
                        CustomLogin(user.email, user.password);
                    });
            }).catch(function(error) {
                $ionicLoading.hide();
                var errorCode = error.code;
                console.log(errorCode);

                if(errorCode === 'auth/weak-password')
                    ionicToast.show('Erro, a senha precisa ter no mínimo 6 digitos.', 'middle', false, 3000);
                
                if(errorCode === 'auth/email-already-in-use')
                   ionicToast.show('Erro, o email: ' + user.email + ' já existe em nossa base de dados.', 'middle', false, 3000);
            })

            return deffered.promise;
        };
    }
})();