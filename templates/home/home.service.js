(function(){
    'use strict';

    angular
        .module('secomp.home')
        .factory('HomeService', HomeService);

   HomeService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function HomeService(fb, $firebaseArray, $firebaseObject){
        var service = {
            GetMiniCurso:GetMiniCurso,
            GetPalestra:GetPalestra
        };
        return service;


        function GetMiniCurso(){
            var query = fb.child('/Home/Mini');
            return $firebaseObject(query).$loaded();
        }

         function GetPalestra(){
            var query = fb.child('/Home/Palestra');
            return $firebaseObject(query).$loaded();
        }

    }
})();