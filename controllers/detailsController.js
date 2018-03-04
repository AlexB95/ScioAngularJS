app.controller("detailsController", function($scope, $http, $routeParams){
    $scope.parametroUrl = $routeParams.id;
});

app.filter('telFilter', function() {
    return (phone) => {
        return "+52 (" + phone.substring(0, 3) + ") " +
            phone.substring(3, 6) + " - " + phone.substring(6);
    };
});