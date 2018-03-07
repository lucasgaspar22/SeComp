(function(){

    angular.module('secomp.tabs',['ionic'])
           .config(function($stateProvider){
                $stateProvider
                    .state('app.tab',{
                        url:'/tab',
                        abstract: true,
                        views: {
                            'menuContent': {                                
                                templateUrl:"templates/tabs/tabs.html",
                                controller:"TabsCtrl as vm"
                            }
                        }
                    });
           })
})();