(function(){
    'use strict';

    angular
        .module('secomp.miniDetails')
        .factory('MiniDetailsService', MiniDetailsService);

   MiniDetailsService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function MiniDetailsService(fb, $firebaseArray, $firebaseObject){
        var service = {
          
        };
        return service;
    }
})();