App.directive("customSlider" , [function(){
    return {
        scope:{
            images: '='
        },
        restrict:'AE',
        replace:true,
        link:function(scope, elem, attrs){
            scope.currentIndex = 0;
            scope.nextSlide = function(){
                scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                console.log("sliderDirective--next--scope.currentIndex--" + scope.currentIndex);
            
            };
             scope.prevSlide = function(){
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length-1;
                console.log("sliderDirective--Prev--scope.currentIndex--" + scope.currentIndex);
            
            };
            scope.$watch("currentIndex", function(){
                scope.images.forEach(function(image){
                    image.visible = false;
                    console.log("sliderDirective--watch--value :image.visible : " + image.visible );
                });
                 scope.images[scope.currentIndex].visible = true;
            });
        },
        templateUrl:'../../app/views/templates/sliderTemplate.html'

    }
}]);