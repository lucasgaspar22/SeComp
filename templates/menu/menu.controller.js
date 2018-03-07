(function() {
    'use strict';

    angular
        .module('secomp.menu')
        .controller('MenuCtrl', MenuCtrl);

    MenuCtrl.$inject = ['$state','$rootScope'];

    function MenuCtrl($state,$rootScope) {
        var vm = angular.extend(this, {
           ChangeState:ChangeState,
           User:$rootScope.currentUser
        });

        
        function ChangeState(state){
        	$state.go(state);
        }
    }
})();