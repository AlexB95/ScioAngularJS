app.factory("getBusiness", function($http){
    var listBusiness = {
        businessList: [],
        finalStatus: "",
        results: 0
    };
    listBusiness.getImages = (wordToSearch) => {
        $http.get("./business.json")
        .then(function (data) {
            listBusiness.businessList = [];
            data.data.businesses.forEach(element => {
                if(element.name.toLowerCase().search(wordToSearch) >= 0) {
                    listBusiness.businessList.push(element);
                }
                listBusiness.results = listBusiness.businessList.length;
                if (listBusiness.results > 0) {
                    listBusiness.finalStatus = "";
                } else {
                    listBusiness.finalStatus = "No se encontraron resultados";
                }
            });
        },function (error) {
            console.log("Error");
        });
        return listBusiness;
    }
    return listBusiness;
});

app.factory("detailsFactory", function($http){
    var listDetails = {
        businessDetails: {},
        message: "Hola"
    };
    listDetails.getDetails = (businessID) => {
        $http.get("./business.json")
        .then(function (data) {
            listDetails.businessDetails = [];
            data.data.businesses.forEach(element => {
                if(element.id == businessID) {
                    listDetails.businessDetails = element;
                }
            });
        },function (error) {
            console.log("Error");
        });
        return listDetails;
    }
    return listDetails;
});