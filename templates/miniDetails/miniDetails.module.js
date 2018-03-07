(function(){
    'use strict';

    angular
        .module('secomp.miniDetails', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.miniDetails', {
                url: '/miniDetails/:minicursoID',
                views:{
                    'menuContent':{
                        templateUrl: 'templates/miniDetails/miniDetails.html',
                        controller: 'MiniDetailsCtrl as vm'
                    }
                },
                resolve:{
                    Mini: function($stateParams, MinicursosService) {
                        var minicursoID = $stateParams.minicursoID;
                        return MinicursosService.GetMiniCursoById(minicursoID).then(function(mini){
                            return mini;
                        }).catch(function(error){
                             console.log('Error when get MiniCurso: ' + error);
                        })
                    } 
                } 
        })
    }) 
})();