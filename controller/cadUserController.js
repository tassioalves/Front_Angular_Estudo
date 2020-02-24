angular.module("frontAngular").controller("cadUserController", function ($scope, $location, cadUserService) {
    $scope.cadUser = function (newUser) {
        cadUserService.cadUser(newUser)
            .then(function (res) {
                $location.url("/listUser");
            })
            .catch(function (res) {
                alert(res.data)
            })
    };

});