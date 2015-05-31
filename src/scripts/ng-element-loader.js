'use strict';

angular
	.module('angularPromiseLoader', [])
	.directive('ngElementLoader', ['$timeout', function($timeout) {

		/**
		 *	Element loader
		 *	@desc Show loading and response icon after promise
		 */

		return {
			restrict: 'A',
			scope: {
				'ngElementLoader': '&'
			},
			link: function(scope, element) {

				/**
				 *	Remove classes after response
				 *	@param {object} el - Button container
				 */

				function removeClassButton(el) {

					el = angular.element(element);

					$timeout(function() {
						el.removeClass('apl-success apl-error').removeAttr('disabled');
					}, 2500);

				}

				/**
				 *	Click event
				 */

				element.bind('click', function() {

					element.addClass('apl-progress').attr('disabled', true);

					scope.ngElementLoader().then(function() {

						// Resolve

						element.removeClass('apl-progress').addClass('apl-success');
						removeClassButton(element);

					}, function() {

						// Reject

						element.removeClass('apl-progress').addClass('apl-error');
						removeClassButton(element);

					});

				});

			}
		};

	}]);