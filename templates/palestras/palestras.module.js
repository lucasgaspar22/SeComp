(function(){
    'use strict';

    angular
        .module('secomp.palestras', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.tab.palestras', {
                url: '/palestras',
                views:{
                    'palestrasView':{
                        templateUrl: 'templates/palestras/palestras.html',
                        controller: 'PalestrasCtrl as vm'
                    }
                },resolve:{
                    Palestras: function( PalestrasService) {
                        return  PalestrasService.GetPalestras().then(function(palestra){
                            return palestra;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    }
                }
                
            })
    }); 
})();