'use strict';

App.controller('homePageController', ['$scope', 'homePageFactory', function ($scope, homePageFactory) {
    $scope.eventHeader;
    $scope.eventLine1;
    $scope.eventLine3;
    $scope.eventLine3;
    console.log("homePageController::watch:----eventHeader : " + $scope.eventHeader);
    $scope.$watch('eventHeader', function(){
        console.log("homePageController::watch:----eventHeader : " + $scope.eventHeader);
    });

    $scope.getHomePageContents = function () {
        console.log("homePageController::getHopePageContents:----");
         homePageFactory.getHopePageContents()
            .then(function (response) {
                
            }, function (error) {
                $scope.status = 'Unable to load member data: ' + error.message;
            });
    };


    $scope.updateHomePageContents = function () {
        console.log("homePageController::updateMember:----");
         homePageFactory.updateHopePageContents()
          .then(function (response) {
                console.log("homePageController::updateMember response : " + response);
              
          }, function (error) {
              $scope.status = 'Unable to update member: ' + error.message;
          });
    };

}]);
