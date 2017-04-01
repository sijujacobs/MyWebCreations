//App.controller("sliderController", ['$scope', function($scope){
App.controller('sliderController', ['$scope', 'commonFactory', function ($scope, commonFactory) {

    $scope.commonData = "";
    $scope.images = [{name:"tech1.jpg"}, 
                    {name:"tech2.jpg"}, 
                    {name:"tech3.jpg"}, 
                    {name:"tech4.jpg"}, 
                    {name:"tech5.jpg"}
                    ];
    

    $scope.setCommonData = function(){
        console.log("SliderController::shareData------" + $scope.commonData);
        commonFactory.setCommonData($scope.commonData);
    }
    

    console.log("SliderController------" );

}]);