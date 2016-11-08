(function (angular){

	var todoApp = angular.module('TodoApp');

	//注册一个服务
	// 1 首先注册一个服务   注册方式就是借助模块的 service方法。service的参数  主要是一个构造函数
	// 2 使用这个服务时  会自动构造一个对应的对象供使用。
	//3在需要使用该服务的控制器上  注入该服务 即可使用
	todoApp.service('storage',['$window',function($window){

		var STORAGE_ID = 'fang_todos';

		var storage = $window.localStorage;

		//localstorage只能存储字符串, 所以要进行序列化。
		// JSON.parse() 方法将一个 字符串解析成一个 JSON 对象
		var todos = JSON.parse(storage.getItem(STORAGE_ID) || '[]');
		//console.log(todos);
		this.get = function(){
			return todos;
		}

		this.save = function(){
			storage.setItem( STORAGE_ID, JSON.stringify(todos));

		}

		function getID() {
			return Math.random() * Date.parse(new Date());
		}

		this.add = function (input) {

			todos.push({id:getID(), text:input, completed:false});
			this.save();
		}


		this.remove = function (currentObj) {
			var index = todos.indexOf(currentObj);
			todos.splice(index, 1);
			this.save();

		}

		this.showCompletedBtn = function () {
			//var completed = false;
			//没有办法中止或者跳出 forEach 循环，除了抛出一个异常。如果你需要这样，使用forEach()方法是错误的，
			// 你可以用一个简单的循环作为替代。如果您正在测试一个数组里的元素是否符合某条件，且需要返回一个布尔值，
			// 那么可使用 Array.every 或 Array.some。
			return todos.some(todo => todo.completed);
		}





		this.clearCompleted = function () {
			// 不能在循环当中循环或者新增数组元素,  会有角标问题
			//$scope.todos.forEach(todo =>{
			//	if(todo.completed){
			//		$scope.remove(todo);
			//	}
			//})

			var unCompleted  = [];
			todos.forEach(todo => {
				if (!todo.completed) {
					unCompleted.push(todo);
				}
			})
			todos = unCompleted;
			this.save();

			//重新赋值了, 所以需要返回一下 再外面再重新赋值一下
			return todos;

		}

		this.toggleAll = function (checked) {
				todos.forEach(todo => {
				todo.completed = checked;
					this.save(todo);
			})
		}


		this.put = function (todo){

			var index = todos.indexOf(todo);
			todos[index] = todo;
			this.save();

		}



	}])

})(angular)
