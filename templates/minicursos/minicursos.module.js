(function(){
    'use strict';

    angular
        .module('secomp.minicursos', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.tab.minicursos', {
                url: '/minicursos',
                views:{
                    'minicursosView':{
                        templateUrl: 'templates/minicursos/minicursos.html',
                        controller: 'MinicursosCtrl as vm'
                    }
                },
                resolve:{
                    Mini: function( MinicursosService) {
                        return  MinicursosService.GetMiniCursos().then(function(mini){
                            return mini;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    }
                }
                
            })
    }) 
})();