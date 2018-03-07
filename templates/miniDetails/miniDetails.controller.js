(function(){
    'use strict';

    angular
        .module('secomp.miniDetails')
        .controller('MiniDetailsCtrl', MiniDetailsCtrl);

    MiniDetailsCtrl.$inject = ['$scope', '$state','Mini','LoginService','ionicToast','$rootScope'];

    function MiniDetailsCtrl($scope, $state,Mini,LoginService,ionicToast,$rootScope){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Mini:Mini,
            User: $rootScope.currentUser,
            ValidadeMiniCurso:ValidadeMiniCurso
        });

        function ChangeState(state){
            $state.go(state);
        }

        function ValidadeMiniCurso(mini) {
            if(mini.password == vm.Mini.senha){
                var idInput= "passInput-"+vm.Mini.$id;
                var idButton = "validadeBt-"+vm.Mini.$id;
                var points = vm.User.score;
                var points = points + vm.Mini.score;
                LoginService.setScore(points);
                ionicToast.show('Mini curso validado!', 'middle', false, 1500);
                document.getElementById(idInput).value="";
                document.getElementById(idInput).disabled = true;
                mini.password = "";
                document.getElementById(idInput).setAttribute("disabled","disabled");
                document.getElementById(idButton).setAttribute("disabled","disabled");
            }else if(mini.password ==""){
                ionicToast.show('Tentando validar de novo, malandrão?!', 'middle', false, 1500); 
            }else{
                ionicToast.show('Senha inválida', 'middle', false, 1500); 
            }
        
        }
    }    
})();