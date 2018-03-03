app.factory("detailsFactory", function($http){
    var listBusiness = {
        businessList: [],
        finalStatus: ""
    };
    listBusiness.getImages = (wordToSearch) => {
        $http.get("./business.json")
        .then(function (data) {
            listBusiness.businessList = [];
            data.data.businesses.forEach(element => {
                if(element.name.toLowerCase().search(wordToSearch) >= 0) {
                    listBusiness.businessList.push(element);
                }
                (listBusiness.businessList.length > 0) ?
                    listBusiness.finalStatus = "" : listBusiness.finalStatus = "No se encontraron resultados";
            });
        },function (error) {
            console.log("Error");
        });
        return listBusiness;
    }
    return listBusiness;
});