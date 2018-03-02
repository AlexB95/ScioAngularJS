app.controller("instructionsController", function($scope, $timeout) {
    $scope.instrictionsText = "¡Buen día!";
    $timeout(function () {
        $scope.instrictionsText = "Para buscar escriba al menos 3 letras";
    }, 2000);
});