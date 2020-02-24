angular.module("frontAngular").controller("indexController", function ($scope, $location) {
    let carregarHome = function () {
        $location.url("/login");
    };
    carregarHome();
});