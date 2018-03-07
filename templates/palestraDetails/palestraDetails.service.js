(function(){
    'use strict';

    angular
        .module('secomp.palestraDetails')
        .factory('PalestraDetailsService', PalestraDetailsService);

   PalestraDetailsService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function PalestraDetailsService(fb, $firebaseArray, $firebaseObject){
        var service = {
          
        };
        return service;
    }
})();