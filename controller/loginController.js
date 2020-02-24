angular.module("frontAngular").controller("loginController", function ($scope, $location) {
    $scope.newUser = function () {
        $location.url("/newUser");
    };
});