app.factory("detailsFactory", function($http){
    var listBusiness = {};
    listBusiness.getImages = (a) => {
        $http.get("./business.json")
        .then(function (data) {
            listBusiness.businessList = data.data.splice(0, 7);
        },function (error) {
            console("Error");
        });
        return listBusiness;
    }
    return listBusiness;
});