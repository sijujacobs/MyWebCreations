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