

app.controller("searchController", function($scope) {
    
    var band = false;
    $scope.search = function() {
        var text = $scope.business + "";
        var textL = text.length + 1;
        console.log(textL);
        if($scope.business === "") {
            console.log(none);
        }
        if((text.length+1) > 3 && band) {
            console.log("Hola");
        }
        if(!band) {
            band = true;
        }
    }
});