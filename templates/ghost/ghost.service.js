(function(){
    'use strict';

    angular
        .module('secomp.ghost')
        .factory('GhostService', GhostService);

   GhostService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function GhostService(fb, $firebaseArray, $firebaseObject){
        var service = {
          
        };
        return service;
    }
})();