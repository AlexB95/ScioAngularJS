var app = angular.module("appModule", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "homeController",
        templateUrl: "templates/home.html"
    })
    .when("/detalle/:nameHola",{
        controller: "detailsController",
        templateUrl: "templates/detalle.html"
    })
    .otherwise("/");
});

app.controller("homeController", function($scope, $http, detailsFactory){
    vm = this;
    vm.usuarios = detailsFactory.getImages()
    console.log(vm.usuarios);
    

});

app.controller("detailsController", function($scope, $http, $routeParams){

    $scope.parametroUrl = $routeParams.nameHola;
    
});

app.factory("detailsFactory", function($http){
    var listImages = {};
    listImages.getImages = () => {
        $http.get("http://jsonplaceholder.typicode.com/photos")
        .then(function (data) {
            listImages.imgList = data.data.splice(0, 7);
        },function (error) {
            console("Error");
        });
        
        return listImages.imgList;
    }
    
    return listImages;
});
