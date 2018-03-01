app.controller("homeController", function($scope, $http, detailsFactory){
    $scope.listImages = detailsFactory.getImages();
});