(function(){
    'use strict';

    angular
        .module('secomp.home')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', '$state','Mini','Palestra','$rootScope'];

    function HomeCtrl($scope, $state, Mini,Palestra, $rootScope){
        var vm = angular.extend(this, {
            ChangeState:ChangeState,
            Mini:Mini,
            Palestra:Palestra
        });
        //console.log($rootScope.currentUser.name);
        function ChangeState(state){
            $state.go(state);
        }
    }    
})();