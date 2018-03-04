app.controller("homeController", function($scope, $http, detailsFactory){

    $scope.getInfo = function() {
        $scope.listBusiness = detailsFactory.getImages("");
    };

    $scope.goDetails = (businessName) => {
        window.location.href = "#!/detalle/"+businessName;
    };

    $scope.selectedItem = (businessName) => {
        document.getElementById("businessName").innerHTML = businessName;
    };

    $scope.unselectItem = () => {
        document.getElementById("businessName").innerHTML = "";
    };
});