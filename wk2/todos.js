var app = angular.module('todoApp', []);
app.controller('todoCtrl', function ($scope) {
    $scope.newItem = '';

    // Initial list of todo items
    $scope.todos = [
        { action: "Prepare next week's slides", done: false },
        { action: "Figure out project idea", done: true },
        { action: "Find good reinforcement learning book", done: false }
    ];

    // Create a new todo item
    $scope.addItem = () => {
        if ($scope.newItem.length > 0) {
            $scope.todos.push({ action: $scope.newItem, done: false });
            $scope.newItem = '';
        }
    }

    // Count of complete and incomplete items
    $scope.completeCount = () => {
        return $scope.todos.filter(item => item.done).length;
    }

    $scope.incompleteCount = () => {
        return $scope.todos.length - $scope.completeCount();
    }
});