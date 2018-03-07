(function(){
    'use strict';

    angular
        .module('secomp.secomp')
        .factory('SecompService', SecompService);

   SecompService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function SecompService(fb, $firebaseArray, $firebaseObject){
        var service = {
          
        };
        return service;
    }
})();