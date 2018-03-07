(function(){
    'use strict';

    angular
        .module('secomp.ghost')
        .controller('GhostCtrl', GhostCtrl);

    GhostCtrl.$inject = ['$scope', '$state'];

    function GhostCtrl($scope, $state){
        var vm = angular.extend(this, {
            ChangeState:ChangeState
        });
        
        function ChangeState(state){
            $state.go(state);
        }
    }    
})();