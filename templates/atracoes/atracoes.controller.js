(function(){
    'use strict';

    angular
        .module('secomp.atracoes')
        .controller('AtracoesCtrl', AtracoesCtrl);

    AtracoesCtrl.$inject = ['$scope', '$state','Atracoes','ionicToast'];

    function AtracoesCtrl($scope, $state, Atracoes,ionicToast){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Atracoes:Atracoes,
            ViewAtracao:ViewAtracao,
            notAButton:notAButton
        });

        function ChangeState(state){
            $state.go(state);
        }

        function ViewAtracao(atraID){
            $state.go('app.atracaoDetails', {atracaoID: atraID});
        }

        function notAButton(){
            ionicToast.show('Isto não é um botão!', 'middle', false, 1500); 
        }
    }    
})();