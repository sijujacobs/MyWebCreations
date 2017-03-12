'use strict';

App.controller('homePageController', ['$scope', 'homePageFactory','$location', function ($scope, homePageFactory, $location) {

    $scope.showModal = false;
    $scope.showLoginModal = false;
    $scope.loggedMember = {};
    $scope.email;
    $scope.password;
    $scope.token;

    $scope.$watch('token', function(){
        //console.log("homePageController::watch:----token : " + $scope.token);
    });

    $scope.init= function(){
        getHomePageContents();
    }

    function getHomePageContents () {
        console.log("homePageController::getHopePageContents:---- : ");
                
        homePageFactory.getHomePageContents()
            .then(function (response) {
                $scope.homePageData = response.data;
                
            }, function (error) {
                $scope.status = 'Unable to load member data: ' + error.message;
            });
    };


    $scope.updateHomePageContents = function (homePageData) {
        //console.log("homePageController::updateHomePageContents:--token--" + $location.search().token);
        homePageData.token = window.location.search.toString().split('=')[1];
        console.log("homePageData.token : " +  homePageData.token);
         homePageFactory.updateHomePageContents(homePageData)
          .then(function (response) {
                console.log("homePageController::updateHomePageContents response : " + response);
                //$scope.closeModal();
                //window.location.href = '../../index.html';
                alert("Data published successfully. Please review the changes.");
          }, function (error) {
              $scope.status = 'Unable to update member: ' + error.message;
              alert("Home page data NOT saved. Please try again.");
          });
          
    };

    $scope.verifyMember = function (email, password) {
        $scope.loggedMember.functionName = "VERIFY_MEMBER";
        $scope.loggedMember.email = email;
        $scope.loggedMember.password = password;

        homePageFactory.verifyMember($scope.loggedMember)
        .then(function (response) {
            $scope.token = response.data[1].token;
            if(response.data[0].email == $scope.loggedMember.email){
                $scope.closeModal();
                window.location.href = '../../app/views/manageHomePage.html?token=' + $scope.token ;
            }    
        }, function(error) {
            $scope.status = 'Unable to verify member: ' + error.message;
        });
    };


    
    $scope.showMemberLoginModal = function( ) {
        $scope.showLoginModal = true;
    };

    $scope.closeModal = function(index){
        $scope.showLoginModal = false;
    }


}]);


  App.directive('loginModal', function() {
    return {
      restrict: 'E',
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
      },
      template: '<div id="memberLoginModal" class="modalWindow" ng-show="showLoginModal">'
                +'<div class="modalContent">'
                +'<div class="modalHeader">'
                +'  <span class="closeButton" ng-click="closeModal()">&times;</span>'
                +'  <span>Sign In </span>'
                +'</div>'
                +'<div class="modalBody">'
                +'  <form>'
                +'    <div class="formRow">'
                +'      <label class="formLabel" for="fname">Usename</label>'
                +'      <input class="formField" type="text" id="fname" ng-model="email">'
                +'    </div>'
                +'    <div class="formRow">'
                +'      <label class="formLabel" for="lname">Password</label>'
                +'      <input class="formField" type="password" id="lname"  ng-model="password">'
                +'    </div>'
                +' <input class="formButton" type="submit" value="Log in" ng-click="verifyMember(email, password)">'
                +' <input class="formButton closeButton" value="Cancel" ng-click="closeModal()">'
                +'  </form>'
                +'</div>'
                +'</div>'
                +'</div>'
    };
  });
