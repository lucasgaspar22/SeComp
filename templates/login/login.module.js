(function() {
	'use strict';

    angular
        .module('secomp.login', [
            'ionic',
            'ionic-toast',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login/login.html',
                controller: 'LoginCtrl as vm'     
            });
        })    
})();