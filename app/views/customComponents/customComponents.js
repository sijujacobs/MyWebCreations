customDirectives = angular.module('customDirectives', []);
customDirectives.directive('customCollapse', function () {
    return {
        require: '?ngModel',
        scope:{
            ngModel: '='
        },
        restrict: 'A',
        template: '<div class="panel-group" id="{{panelId}}">\
                       <div class="panel panel-default" ng-repeat-start="item in ngModel">\
                           <div class="panel-heading">\
                               <h4 class="panel-title">\
<a ng-click="toggleCollapsedStates($index)" href="#{{panelBaseId}}-{{$index}}">{{item.title}}</a>\
                               </h4>\
                           </div>\
<div id="{{panelBaseId}}-{{$index}}" data-parent="#{{panelId}}" class="panel-collapse collapse">\
                               <div class="panel-body">{{item.content}}</div>\
                           </div>\
                       </div>\
                       <div ng-repeat-end></div>\
                   </div>',
        link: function (scope, el, attrs) {
            scope.panelBaseId = attrs.collapsePanelBodyId;
            scope.panelId = attrs.collapsePanelId;
            
            $(document).ready(function(){
                angular.forEach(scope.ngModel, function(value, key){
                    if (value.collapsed)
                    {
                        $("#" + scope.panelBaseId + "-" + key).collapse('show');
                    }
                });
            });
            
            scope.toggleCollapsedStates = function(ind){
                angular.forEach(scope.ngModel, function(value, key){
                    if (key == ind)
                    {
                        scope.ngModel[key].collapsed = !scope.ngModel[key].collapsed;
                        $("#" + scope.panelBaseId + "-" + ind).collapse('toggle');
                    }
                    else
                        scope.ngModel[key].collapsed = false;
                });
            }
        }
    };
});

angular.module('CustomComponents', ['customDirectives']);
function CustomDirectivesController($scope)
{    
    $scope.collapseData = [
        {
            title: "Collapse Group Item Title 1",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            collapsed: true
        },
        {
            title: "Collapse Group Item Title 2",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            collapsed: false
        },
        {
            title: "Collapse Group Item Title 2",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
            collapsed: false
        }
    ];
}