(function(){
    'use strict';

    angular
        .module('secomp.atracaoDetails')
        .factory('AtracaoDetailsService', AtracaoDetailsService);

   AtracaoDetailsService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function AtracaoDetailsService(fb, $firebaseArray, $firebaseObject){
        var service = {
          
        };
        return service;
    }
})();