

app.controller("searchController", function($scope, $timeout, getBusiness) {

    $scope.search = function() {
        window.location.href = "#!/";
        var wordToSearch;
        ($scope.businessS) ? wordToSearch = $scope.businessS : wordToSearch = "";
        $scope.result = "Buscando...";
        console.log(wordToSearch);
        if(wordToSearch.length > 2) {
            $scope.listBusiness = getBusiness.getImages(wordToSearch.toLowerCase());
        } else {
            $scope.listBusiness = getBusiness.getImages("");
            $scope.result = $scope.listBusiness.finalStatus;
        }
        
        $timeout(function () {
            $scope.result = $scope.listBusiness.finalStatus;
        }, 700);
    }
});