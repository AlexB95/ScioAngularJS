

app.controller("searchController", function($scope) {
    
    var band = false;
    $scope.search = function() {
        var wordToSearch = $scope.businessS;
        if(wordToSearch.length > 2) {
            $scope.getInfo();
        }
    }
});