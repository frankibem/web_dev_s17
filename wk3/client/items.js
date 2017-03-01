var app = angular.module('itemApp', []);

app.controller('itemCtrl', function ($scope, $http) {
    $scope.items = [];
    $scope.newItem = {
        title: '',
        description: '',
        price: 0.0
    };

    $scope.loadItems = function () {
        $http.get('http://cataloger.azurewebsites.net/api/items')
            .then(function (response) {
                $scope.items = response.data;
            });
    }

    $scope.createItem = function () {
        $http.post('http://cataloger.azurewebsites.net/api/items', $scope.newItem)
            .then(function (response) {
                $scope.newItem.title = '';
                $scope.newItem.description = '';
                $scope.newItem.price = '';
            });
    }

    $scope.updateItem = function (item) {
        $http.put('http://cataloger.azurewebsites.net/api/items', item)
            .then(function (response) {
                alert('Item updated');
            });
    }

    $scope.deleteItem = function (item) {
        $http.delete('http://cataloger.azurewebsites.net/api/items/' + item.id)
            .then(function (response) {
                var index = $scope.items.indexOf(item);
                $scope.items.splice(index, 1);
            });
    }
}); 