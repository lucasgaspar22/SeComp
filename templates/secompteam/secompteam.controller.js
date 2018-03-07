(function(){
    'use strict';

    angular
        .module('secomp.team')
        .controller('TeamCtrl', TeamCtrl);

    TeamCtrl.$inject = ['$scope', '$state','Team'];

    function TeamCtrl($scope, $state,Team){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Team:Team
        });
        
        function ChangeState(state){
            $state.go(state);
        }
    }    
})();