app.factory("detailsFactory", function($http){
    var listImages = {};
    listImages.getImages = () => {
        $http.get("./photos.json")
        .then(function (data) {
            listImages.imgList = data.data.splice(0, 7);
        },function (error) {
            console("Error");
        });
        console.log(listImages);
        return listImages;
    }
    return listImages;
});