(function(){
    'use strict';

    angular
        .module('secomp.secomp', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.secomp', {
                url: '/secomp',
                views:{
                    'menuContent':{
                        templateUrl: 'templates/secomp/secomp.html',
                        controller: 'SecompCtrl as vm'
                    }
                }   
        })
    }) 
})();