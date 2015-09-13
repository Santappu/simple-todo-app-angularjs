angular.module('ToDo', []).
controller('todoController', ['$scope', function($scope) {
	$scope.todos = [{
		'title': 'have to add some more tasks',
		'done': false
	}];

	$scope.addTodo = function() {
		$scope.todos.push({
			'title': $scope.newTodo,
			'done': false
		})
		$scope.newTodo = ''
	}

	$scope.getTotalTodo = function() {
		return $scope.todos.length;
	}

	$scope.clearCompleted = function() {
		$scope.todos = $scope.todos.filter(function(item) {
			return !item.done
		})
	}
}]);