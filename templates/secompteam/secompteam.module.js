(function(){
    'use strict';

    angular
        .module('secomp.team', [
            'ionic',
            'secomp.common'
        ])
        .config(function($stateProvider) {
        
        $stateProvider
            .state('app.team', {
                url: '/team',
                views:{
                    'menuContent':{
                        templateUrl: 'templates/secompteam/secompteam.html',
                        controller: 'TeamCtrl as vm'
                    }
                },
                resolve:{
                    Team: function( TeamService) {
                        return  TeamService.GetTeam().then(function(team){
                            return team;
                        }).catch(function(error){
                             console.log('Error when get products: ' + error);
                        })
                    }
                }  
        })
    }) 
})();