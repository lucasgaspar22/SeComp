(function(){
    'use strict';

    angular
        .module('secomp.palestras')
        .factory('PalestrasService', PalestrasService);

   PalestrasService.$inject = ['fb', '$firebaseArray', '$firebaseObject'];

    function PalestrasService(fb, $firebaseArray, $firebaseObject){
        var service = {
            GetPalestras:GetPalestras,
            GetPalestraById:GetPalestraById,
            GetPalestraScore:GetPalestraScore
        };
        return service;

        function GetPalestras(){
            var query = fb.child('/Palestras');
            return $firebaseArray(query).$loaded();
        }

        function GetPalestraById(id){
            var query = fb.child('/Palestras/' + id);
            return $firebaseObject(query).$loaded();
        }

        function GetPalestraScore(id){
            var query = fb.child('/Palestras/palestra5/score');
        }

    }
})();