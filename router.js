angular.module("frontAngular").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/index",{
        templateUrl:"index.html",
        controller: "indexController"
    });
    $routeProvider.when("/newUser",{
        templateUrl:"view/newUser.html",
        controller: "newUserController"
    });

    $routeProvider.when("/login",{
        templateUrl:"view/login.html",
        controller: "loginController"
    });

    $routeProvider.when("/listUser",{
        templateUrl:"view/listUser.html",
        controller: "listUserController"
    });

    $routeProvider.when("/cadUser",{
        templateUrl:"view/cadUser.html",
        controller: "cadUserController"
    });
}]);