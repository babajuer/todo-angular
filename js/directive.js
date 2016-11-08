(function (angular) {
	'use strict';

	//定义一个指令, 双击这个任务时 自动得到焦点. 因为index中 点击的实际是li  所以指令要加在li上 而不是input上
	var todoApp = angular.module('TodoApp');

	// 定义一个指令（指令的作用就是在双击这个任务时自动得到焦点）
	todoApp.directive('todoFocus', [function() {
		return {
			link: function(scope, element, attributes) {
				// console.log(element);
				element.on('dblclick', function() {
					angular.element(this).find('input').eq(1)[0].focus();
				});
			}
		}
	}]);

})(angular);
