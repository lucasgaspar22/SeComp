(function(){
    'use strict';

    angular
        .module('secomp.palestraDetails')
        .controller('PalestraDetailsCtrl', PalestraDetailsCtrl);

    PalestraDetailsCtrl.$inject = ['$scope', '$state','Palestra','$rootScope', 'ionicToast' , 'LoginService'];

    function PalestraDetailsCtrl($scope, $state,Palestra, $rootScope,ionicToast,LoginService){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Palestra:Palestra,
            ValidadePalestra: ValidadePalestra,
            User: $rootScope.currentUser
        });

        function ChangeState(state){
            $state.go(state);
        }

        function ValidadePalestra(palestra) {
            if(palestra.password == vm.Palestra.senha){
                var idInput= "passInput-"+vm.Palestra.$id;
                var idButton = "validadeBt-"+vm.Palestra.$id;
                var points = vm.User.score;
                var points = points + vm.Palestra.score;
                LoginService.setScore(points);
                ionicToast.show('Palestra validada!', 'middle', false, 1500);
                document.getElementById(idInput).value="";
                document.getElementById(idInput).disabled = true;
                palestra.password = "";
                document.getElementById(idInput).setAttribute("disabled","disabled");
                document.getElementById(idButton).setAttribute("disabled","disabled");
            }else if(palestra.password ==""){
                ionicToast.show('Tentando validar de novo, malandrão?!', 'middle', false, 1500); 
            }else{
                ionicToast.show('Senha inválida', 'middle', false, 1500); 
            }
        
        }
    }    
})();