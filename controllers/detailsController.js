app.controller("detailsController", function($scope, $http, $routeParams, detailsFactory){
    $scope.parametroUrl = $routeParams.id;
    $scope.detailsBusiness = detailsFactory.getDetails($routeParams.id);
    $scope.getDetails = function(id) {
        $scope.detailsBusiness = detailsFactory.getDetails($routeParams.id);
    };
});

app.filter('telFilter', function() {
    return (phone) => {
        phoneF = phone + "";
        return "+52 (" + phoneF.substring(0, 3) + ") " +
        phoneF.substring(3, 6) + " - " + phoneF.substring(6);
    };
});