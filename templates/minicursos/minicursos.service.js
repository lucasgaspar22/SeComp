(function(){
    'use strict';

    angular
        .module('secomp.minicursos')
        .factory('MinicursosService', MinicursosService);

   MinicursosService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function MinicursosService(fb, $firebaseArray, $firebaseObject){
        var service = {
            GetMiniCursos:GetMiniCursos,
            GetMiniCursoById:GetMiniCursoById
        };
        return service;

        function GetMiniCursos(){
            var query = fb.child('/MiniCursos');
            return $firebaseArray(query).$loaded();
        }

         function GetMiniCursoById(id){
            var query = fb.child('/MiniCursos/' + id);
            return $firebaseObject(query).$loaded();
        }
    }
})();