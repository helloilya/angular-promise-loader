'use strict';

angular
	.module('angularPromiseLoader')
	.directive('ngFormLoader', ['$timeout', function($timeout) {

		/**
		 *	Form loader
		 *	@desc Show loading on submit button and disable form elements, while you are waiting response
		 */

		return {
			restrict: 'A',
			scope: {
				'ngFormLoader': '&'
			},
			link: function(scope, element) {

				/**
				 *	Remove classes after response
				 *	@param {object} formEl - Form elements
				 *	@param {object} el - Button container
				 */

				function removeClassButton(formEl, el) {

					el = angular.element(element);

					$timeout(function() {

						el.removeClass('apl-success apl-error').removeAttr('disabled');
						disableForm(formEl, false);

					}, 2500);

				}

				/**
				 *	Disable form elements
				 *	@param {object} el - Button container
				 *	@param {boolean} flag - Disable or not disable form elements
				 */

				function disableForm(el, flag) {

					var length = el.length;

					for(var i = 0; i < length; i++) {
						if(flag) { el[i].setAttribute('disabled', true); }
						else { el[i].removeAttribute('disabled'); }
					}

				}

				/**
				 *	Find `ng-model` form elements
				 *	@param {object} el - Button container
				 */

				function findFormElements(el) {

					var i = 5; // Maximum nesting

					do {

						el = el.parentNode;
						i--;

					} while(el.tagName.toLowerCase() !== 'form' && i !== 0);

					return el.querySelectorAll('[ng-model]');

				}

				/**
				 *	Click/submit event
				 */

				element.bind('click', function() {

					var formElements = findFormElements(this);

					element.addClass('apl-progress').attr('disabled', true);
					disableForm(formElements, true);

					scope.ngFormLoader().then(function() {

						// Resolve

						element.removeClass('apl-progress').addClass('apl-success');
						removeClassButton(formElements, element);

					}, function() {

						// Reject

						element.removeClass('apl-progress').addClass('apl-error');
						removeClassButton(formElements, element);

					});

				});

			}
		};

	}]);