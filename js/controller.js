(function (angular){

	var todoApp = angular.module('TodoApp');

	todoApp.controller('MainController',[
		'$scope',
		'$location',
		'storage',
		function ($scope, $location, storage) {

				//初始化数据成员
				$scope.input = '';

				$scope.currentEditingId = 0;

				$scope.todos = storage.get();


				//双击启用编辑
				$scope.editing = function (obj) {
					$scope.currentEditingId = obj.id;
				}


				$scope.save = function () {
					$scope.currentEditingId = 0;
					storage.save();
				}


				$scope.add = function () {
					if (!$scope.input) {
						return;
					}
					storage.add($scope.input);
					$scope.input = '';
				}


				$scope.remove = storage.remove;


				$scope.showCompletedBtn = storage.showCompletedBtn;

				$scope.clearCompleted = function () {
					var temp = storage.clearCompleted();
					$scope.todos = temp;

				}

				$scope.checkAll = false;
				$scope.toggleAll = function () {
					storage.toggleAll($scope.checkAll);
				}


				//筛选问题
				$scope.filterData = {};

				//$watch 只监视$scope上的成员(属性 方法返回值)
				//所以要把$location放到$scope上
				$scope.location = $location;

				// 监听一个model 当一个model每次改变时 都会触发第2个函数
				$scope.$watch('location.url()',function(newValue,oldValue){

					switch (newValue) {
						case '/completed':
							$scope.filterData = {completed: true};
							break;
						case '/active':
							$scope.filterData = {completed: false};
							break;
						default:
							$scope.filterData = {};

					}

				});



				$scope.toggleCompleted = function (todo){

					storage.put(todo);
				}


			}]);


})(angular)
