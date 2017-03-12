'use strict';
console.log("crud::memberController----------");

App.controller('memberController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
//App.controller('memberController', ['$scope', 'dataService', function ($scope, dataService) {
    $scope.status;
    $scope.members;
    $scope.memberObj;
    $scope.selectedMember;
    $scope.showModal = false;
    
    console.log("crud::memberController---1-------");
    
    getMembers();

    function getMembers() {
        console.log("crud::memberController---2-------");

        dataFactory.getMembers()
            .then(function (response) {
                $scope.members = response.data;
            }, function (error) {
                $scope.status = 'Unable to load member data: ' + error.message;
            });
    }

    $scope.clearMember = function () {
        console.log("memberController::clearMember:----");
        $scope.selectedMember = {};
    }

    $scope.showModal = function () {
        console.log("memberController::showModal:----");
        
    }

    $scope.hideModal = function () {
        console.log("memberController::hideModal:----");
        
    }


    $scope.saveMember = function (member) {
        if(validMemberData(member)){
            if(member.memberId > 0){
                $scope.updateMember(member);
            }else{
                console.log("memberController::saveMember:----" + member.firstName);
        
                $scope.insertMember(member);
            }
        }else{
            alert("Please enter valid data...");
        }
    }

    $scope.insertMember = function (member) {
        console.log("memberController::insertMember:----" + member.firstName);
        dataFactory.insertMember(member)
        .then(function (response) {
            $scope.status = 'Inserted member! Refreshing member list.';
            $scope.members.push(member);
            $scope.closeModal();
        }, function(error) {
            $scope.status = 'Unable to insert member: ' + error.message;
        });
    };

    $scope.updateMember = function (member) {
        console.log("memberController::updateMember:----");
         dataFactory.updateMember(member)
          .then(function (response) {
                console.log("memberController::updateMember response : " + response);
              $scope.status = 'Updated member! Refreshing member list.';
              $scope.closeModal();
          }, function (error) {
              $scope.status = 'Unable to update member: ' + error.message;
          });
    };

    $scope.deleteMember = function (memberId) {
        console.log("memberController::deleteMember:----" + memberId);
         
        dataFactory.deleteMember(memberId)
        .then(function (response) {
            $scope.status = 'Deleted member! Refreshing member list.';
            
        }, function (error) {
            $scope.status = 'Unable to delete member: ' + error.message;
        });
    };


    
    $scope.$watch('selectedRowIndex', function(){
        //console.log("memberController::watch:----");
        
    });

    function validMemberData(member){
        return member.firstName != "" && member.lastName != "";    
    }

    $scope.showMemberViewModal = function(member) {
        $scope.selectedMember = member ? member:$scope.clearMember();
        console.log("selectedMember : " + $scope.selectedMember);
        $scope.showModal = true;
    };

    $scope.closeModal = function(index){
        $scope.showModal =  false;
    }



}]);

 App.directive('modalDialog', function() {
    return {
      restrict: 'E',
      replace: true, // Replace with the template below
      transclude: true, // we want to insert custom content inside the directive
      link: function(scope, element, attrs) {
        scope.dialogStyle = {};
        console.log(attrs.width);
        if (attrs.width)
          scope.dialogStyle.width = attrs.width;
        if (attrs.height)
          scope.dialogStyle.height = attrs.height;
      },
      templateUrl: '/app/views/templates/memberView.html'
    };
  });


App.directive('ngConfirmClick', [function(){

    //priority and terminal : if same element has multiple directives
    //priority : Execute according to priority level
    //terminal : if set to false, Skip all other directives comes after this
    return {
        priority: 1,
        terminal: true,
        restrict: 'A',
        link: function (scope, element, attr) {
            var msg = attr.ngConfirmClick || "Are you sure?";
            var clickAction = attr.ngClick;
            element.bind('click',function (event) {
                if ( window.confirm(msg) ) {
                    scope.$eval(clickAction)
                }
            });
        }
    };
}])