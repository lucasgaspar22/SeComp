(function(){
    'use strict';

    angular
        .module('secomp.atracoes')
        .factory('AtracoesService', AtracoesService);

   AtracoesService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function AtracoesService(fb, $firebaseArray, $firebaseObject){
        var service = {
            GetAtraction:GetAtraction,
            GetAtractionById:GetAtractionById
        };
        return service;

        function GetAtraction(){
            var query = fb.child('/Atracoes');
            return $firebaseArray(query).$loaded();
        }

        function GetAtractionById(id){
            var query = fb.child('/Atracoes/' + id);
            return $firebaseObject(query).$loaded();
        }
    }
})();