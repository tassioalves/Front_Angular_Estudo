angular.module("frontAngular").controller("listUserController", function ($scope, $location, listUserService) {

    var carregarUsers = function () {
        listUserService.listUsers()
            .then(function (response) {
                $scope.users = response.data;
            }).catch(function (response) {
            console.log(response);
            alert("Users not found!")
        });
    };

    carregarUsers();

});