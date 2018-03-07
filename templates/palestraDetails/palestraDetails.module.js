(function(){
    'use strict';

    angular
        .module('secomp.palestraDetails', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.palestraDetails', {
                url: '/palestraDetails/:palestraID',
                views:{
                    
                    templateUrl: 'templates/palestraDetails/palestraDetails.html',
                    controller: 'PalestraDetailsCtrl as vm'
                },
                resolve:{
                    Palestra: function($stateParams, PalestrasService) {
                        var palestraID = $stateParams.palestraID;
                        return PalestrasService.GetPalestraById(palestraID).then(function(palestra){
                            return palestra;
                        }).catch(function(error){
                             console.log('Error when get Palestra: ' + error);
                        })
                    } 
                } 
        })
    }) 
})();