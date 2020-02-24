angular.module("frontAngular").service("listUserService", function ($http) {
    var url = "http://localhost:8080/user";

    var listUsers = function () {

        return $http.get(url);
    };
    return {
        listUsers: listUsers
    }
});