(function(){
    'use strict';

    angular
        .module('secomp.atracoes', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.tab.atracoes', {
                url: '/atracoes',
                views:{
                    'atracoesView':{
                        templateUrl: 'templates/atracoes/atracoes.html',
                        controller: 'AtracoesCtrl as vm'
                    }
                },
                resolve:{
                    Atracoes: function( AtracoesService) {
                        return  AtracoesService.GetAtraction().then(function(atracao){
                            return atracao;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    }
                }
                
            })
    }); 
})();