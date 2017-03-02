var app = angular.module('chuckApp', []);

app.controller('chuckCtrl', function ($scope, $http) {
    $scope.randomJoke = function () {
        $http.get('https://api.chucknorris.io/jokes/random')
            .then(function (response) {
                console.log(response.data);
                $scope.joke = response.data.value;
                $scope.image = response.data["icon_url"];
            });
    }
});