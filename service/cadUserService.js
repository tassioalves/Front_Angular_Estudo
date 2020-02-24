angular.module("frontAngular").service("cadUserService", function ($http) {
    var url = "http://localhost:8080/user";

    var cadUser = function (newUser) {

        var requerimentoPost = {
            method: "POST",
            url: url,
            headers: {
                "Content-Type": "application/json"
            },
            data: newUser
        };
        return $http(requerimentoPost);
    };

    return {
        cadUser : cadUser
    }

});