(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!


	function getID() {
		return Math.random() * Date.parse(new Date());
	}

	var todoApp = angular.module('TodoApp', []);
	todoApp.controller('MainController', ['$scope', function ($scope) {
		//初始化数据成员
		$scope.input = '';

		$scope.currentEditingId = 0;

		$scope.todos = [
			{id: getID(), text: 'html', completed: false},
			{id: getID(), text: 'css', completed: true},
			{id: getID(), text: 'js', completed: false}
		];


		//双击启用编辑
		$scope.editing = function (obj) {
			$scope.currentEditingId = obj.id;
		}


		$scope.save = function () {
			$scope.currentEditingId = 0;
			console.log("save");
		}


		$scope.add = function () {
			if (!$scope.input) {
				return;
			}
			$scope.todos.push({id: getID(), text: $scope.input, completed: false});
			$scope.input = '';
			console.log($scope.todos);
		}


		$scope.remove = function (obj) {
			var index = $scope.todos.indexOf(obj);
			$scope.todos.splice(index, 1);
		}


		$scope.showCompletedBtn = function () {
			var completed = false;
			//没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，
			// 你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，
			// 那么可使用 Array.every 或 Array.some。
			return $scope.todos.some(todo => todo.completed);
		}

		$scope.clearCompleted = function () {
			// 不能在循环当中循环或者新增数组元素,  会有角标问题
			//$scope.todos.forEach(todo =>{
			//	if(todo.completed){
			//		$scope.remove(todo);
			//	}
			//})

			var temp = [];
			$scope.todos.forEach(todo =>{
				if(!todo.completed){
					temp.push(todo);
				}
			})
			$scope.todos = temp;

		}

		$scope.checkAll = false;
		$scope.toggleAll = function(){
			$scope.todos.forEach(todo =>{
				todo.completed = $scope.checkAll;
			})
		}

	}]);



})(angular);
