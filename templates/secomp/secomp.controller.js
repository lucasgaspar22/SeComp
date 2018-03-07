(function(){
    'use strict';

    angular
        .module('secomp.secomp')
        .controller('SecompCtrl', SecompCtrl);

    SecompCtrl.$inject = ['$scope', '$state'];

    function SecompCtrl($scope, $state){
        var vm = angular.extend(this, {
            ChangeState:ChangeState
        });
        
        function ChangeState(state){
            $state.go(state);
        }
    }    
})();