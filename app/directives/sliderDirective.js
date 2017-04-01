//App.directive("customSlider" , [function($timeout){
App.directive('customSlider', ['$timeout', function ($timeout) {
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
            };
             scope.prevSlide = function(){
                scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length-1;
    
            };
            scope.$watch("currentIndex", function(){
                scope.images.forEach(function(image){
                    image.visible = false;

                });
                 scope.images[scope.currentIndex].visible = true;
            });

            var timer;
            var autoSlider = function() {
                timer = $timeout(function() {
                    scope.nextSlide();
                    timer = $timeout(autoSlider, 5000);
                }, 3000);
            };

            autoSlider();

            scope.$on('$destroy', function() {
                $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
            });
        },
        templateUrl:'../../app/views/templates/sliderTemplate.html'

    }
}]);