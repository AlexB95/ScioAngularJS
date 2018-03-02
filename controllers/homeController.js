app.controller("homeController", function($scope, $http, detailsFactory){
    $scope.listBusiness = detailsFactory.getImages("hello");
    /* $scope.searchedBusiness = (searchText) => {
        console.log("Some text: " + searchText);
    } */
});