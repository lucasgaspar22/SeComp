// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('secomp', [
  'ionic',
  'firebase',

  'secomp.common',
  'secomp.menu',
  'secomp.tabs',
  'secomp.login',
  'secomp.home',
  'secomp.minicursos',
  'secomp.miniDetails',
  'secomp.palestras',
  'secomp.palestraDetails',
  'secomp.atracoes',
  'secomp.atracaoDetails',
  'secomp.secomp',
  'secomp.team',
  'secomp.ghost'
  
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window.plugins.OneSignal
          .startInit("42df7bd0-8537-4555-8c7c-ab40bd10c3b3", "364131373780")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();
  });
})
.config(function($urlRouterProvider,$ionicConfigProvider){
  $urlRouterProvider.otherwise('/login');
  $ionicConfigProvider.tabs.position('bottom');

})
