(function(){
    'use strict';

    angular
        .module('secomp.palestras')
        .controller('PalestrasCtrl', PalestrasCtrl);

    PalestrasCtrl.$inject = ['$scope', '$state','Palestras'];

    function PalestrasCtrl($scope, $state, Palestras ){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Palestras:Palestras,
            ViewPalestra:ViewPalestra
        });

        function ChangeState(state){
            $state.go(state);
        }

         function ViewPalestra(palID){
            $state.go('app.palestraDetails', {palestraID: palID});
        }
    }    
})();