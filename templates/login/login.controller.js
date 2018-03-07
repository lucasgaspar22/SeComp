(function() {
	'use strict';

    angular
        .module('secomp.login')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', 'LoginService'];

    function LoginCtrl($scope, $state,  LoginService){
        var vm = angular.extend(this, {
        	RegisterUser: RegisterUser
        });

        if(localStorage.getItem("uEmail")!==undefined && localStorage.getItem("uPassword")!==undefined) {
            LoginService.CustomLogin(localStorage.getItem("uEmail"),localStorage.getItem("uPassword"));
        }

        function RegisterUser(user){
            LoginService.RegisterUser(user);
        }

    }
})();