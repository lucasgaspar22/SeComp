(function(){
    'use strict';

    angular
        .module('secomp.atracaoDetails')
        .controller('AtracaoDetailsCtrl', AtracaoDetailsCtrl);

    AtracaoDetailsCtrl.$inject = ['$scope', '$state','Atracao','$rootScope', 'ionicToast' , 'LoginService'];

    function AtracaoDetailsCtrl($scope, $state,Atracao, $rootScope,ionicToast,LoginService){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Atracao:Atracao,
            ValidadeAtracao: ValidadeAtracao,
            User: $rootScope.currentUser
        });

        function ChangeState(state){
            $state.go(state);
        }

        function ValidadeAtracao(atracao) {
            if(atracao.password == vm.Atracao.senha){
                var points = vm.User.score;
                var points = points + vm.Atracao.score;
                LoginService.setScore(points);
                ionicToast.show('Atração validada!', 'middle', false, 1500);
                document.getElementById('passInput').value = "";
                atracao.password="";

            }else{
                ionicToast.show('Senha inválida', 'middle', false, 1500); 
            }
        
        }
    }    
})();