(function() {
	'use strict';

	angular
		.module('secomp.menu', [
			'ionic',
			'secomp.common'
			])
		.config(function($stateProvider) {
			$stateProvider
				.state('app', {
					url: '/app',
					abstract: true,
					templateUrl: 'templates/menu/menu.html',
					controller: 'MenuCtrl as vm'
				});
		});
})();