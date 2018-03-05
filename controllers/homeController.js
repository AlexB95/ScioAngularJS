app.controller("homeController", function($scope, $http, getBusiness){

    $scope.getInfo = function() {
        $scope.listBusiness = getBusiness.getImages("");
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