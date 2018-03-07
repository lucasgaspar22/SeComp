(function(){
    'use strict';

    angular
        .module('secomp.ghost', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.ghost', {
                url: '/ghost',
                views:{
                    'menuContent':{
                        templateUrl: 'templates/ghost/ghost.html',
                        controller: 'GhostCtrl as vm'
                    }
                }   
        })
    }) 
})();