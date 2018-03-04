var app = angular.module("appModule", ["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider
    .when("/",{
        controller: "homeController",
        templateUrl: "templates/home.html"
    })
    .when("/detalle/:id",{
        controller: "detailsController",
        templateUrl: "templates/detalle.html"
    })
    .otherwise("/");
});

app.directive("titles", function() {
    return {
        restrict : "E",
        replace: false
    };
});

app.directive("business", function() {
    return {
        restrict : "E",
        replace: false
    };
});