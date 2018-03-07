(function(){
    'use strict';

    angular
        .module('secomp.home', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.tab.home', {
                url: '/home',
                views:{
                    'homeView':{
                        templateUrl: 'templates/home/home.html',
                        controller: 'HomeCtrl as vm'
                    }
                },
                resolve:{
                    Mini: function( HomeService) {
                        return  HomeService.GetMiniCurso().then(function(mini){
                            return mini;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    },
                    Palestra: function( HomeService) {
                        return  HomeService.GetPalestra().then(function(palestra){
                            return palestra;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    }
                }
        })
    }) 
})();