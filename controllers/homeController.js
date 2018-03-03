app.controller("homeController", function($scope, $http, detailsFactory){
    
    $scope.getInfo = function() {
        $scope.listBusiness = detailsFactory.getImages("");
    }
});