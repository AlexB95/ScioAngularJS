app.controller("homeController", function($scope, $http, detailsFactory){
    
    $scope.listBusiness = detailsFactory.getImages("hello");
});