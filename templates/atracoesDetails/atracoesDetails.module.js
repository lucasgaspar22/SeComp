(function(){
    'use strict';

    angular
        .module('secomp.atracaoDetails', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.atracaoDetails', {
                url: '/atracaoDetails/:atracaoID',
                views:{
                    'menuContent':{
                        templateUrl: 'templates/atracoesDetails/atracoesDetails.html',
                        controller: 'AtracaoDetailsCtrl as vm'
                    }
                },
                resolve:{
                    Atracao: function($stateParams, AtracoesService) {
                        var atracaoID = $stateParams.atracaoID;
                        return AtracoesService.GetAtractionById(atracaoID).then(function(atracao){
                            return atracao;
                        }).catch(function(error){
                             console.log('Error when get Atraçao: ' + error);
                        })
                    } 
                } 
        })
    }) 
})();