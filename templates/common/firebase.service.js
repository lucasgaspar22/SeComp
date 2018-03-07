(function () {
    'use strict';

    angular
        .module('secomp.common')
        .factory('fb', function () {
            // Initialize Firebase
             var config = {
                apiKey: "AIzaSyD3te8xkmF7ak8QZeVKbwNl8GnKBWGgzQ0",
                authDomain: "secomp-1e3eb.firebaseapp.com",
                databaseURL: "https://secomp-1e3eb.firebaseio.com",
                projectId: "secomp-1e3eb",
                storageBucket: "secomp-1e3eb.appspot.com",
                messagingSenderId: "364131373780"
            };
            
            firebase.initializeApp(config);
            return firebase.database().ref();
        });
})();