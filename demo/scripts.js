'use strict';

angular
	.module('loaderDemo', ['angularPromiseLoader'])
	.controller('loaderDemoCtrl', ['$scope', '$timeout', '$q', function($scope, $timeout, $q) {

		/**
		 *	Promise imitations
		 */

		$scope.successPromiseImitation = function() {

			var deferred = $q.defer();

			$timeout(function() {

				deferred.resolve();

			}, 1500);

			return deferred.promise;

		};

		$scope.errorPromiseImitation = function() {

			var deferred = $q.defer();

			$timeout(function() {

				deferred.reject();

			}, 1500);

			return deferred.promise;

		};

	}]);