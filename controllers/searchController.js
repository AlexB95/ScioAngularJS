

app.controller("searchController", function($scope, $timeout, detailsFactory) {

    $scope.search = function() {
        window.location.href = "#!/";
        var wordToSearch;
        ($scope.businessS) ? wordToSearch = $scope.businessS : wordToSearch = "";
        $scope.result = "Buscando...";
        console.log(wordToSearch);
        if(wordToSearch.length > 2) {
            $scope.listBusiness = detailsFactory.getImages(wordToSearch.toLowerCase());
        } else {
            $scope.listBusiness = detailsFactory.getImages("");
            $scope.result = $scope.listBusiness.finalStatus;
        }
        
        $timeout(function () {
            $scope.result = $scope.listBusiness.finalStatus;
        }, 700);
    }
});