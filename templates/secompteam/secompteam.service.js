(function(){
    'use strict';

    angular
        .module('secomp.team')
        .factory('TeamService', TeamService);

   TeamService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function TeamService(fb, $firebaseArray, $firebaseObject){
        var service = {
          GetTeam:GetTeam
        };
        return service;

        function GetTeam(){
            var query = fb.child('/Team');
            return $firebaseArray(query).$loaded();
        }
    }
})();