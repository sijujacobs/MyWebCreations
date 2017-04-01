'use strict';

App.controller('customGridController', ['$scope', 'deviceFactory', function ($scope, deviceFactory) {

    $scope.devices = [
                {"txnId":1 , "name":"Apple" , "action":"Buy" , "quantity":10, "price":555 , "marketPrice":500, "state":"Florida"} ,
                {"txnId":2 , "name":"Samsung" , "action":"Buy" , "quantity":9, "price":444 , "marketPrice":360, "state":"Texas"} ,
                {"txnId":3 , "name":"Apple" , "action":"Buy" , "quantity":20, "price":501 , "marketPrice":102, "state":"Florida"} ,
                {"txnId":4 , "name":"Apple" , "action":"Sell" , "quantity":15, "price":502 , "marketPrice":778, "state":"Georgia"} ,
                {"txnId":5 , "name":"Motorola" , "action":"Buy" , "quantity":9, "price":455 , "marketPrice":369, "state":"Texas"} ,
                {"txnId":6 , "name":"Motorola" , "action":"Sell" , "quantity":7, "price":453 , "marketPrice":301, "state":"Georgia"} ,
                {"txnId":7 , "name":"Apple" , "action":"Buy" , "quantity":10, "price":715 , "marketPrice":615, "state":"Florida"} ,
                {"txnId":8 , "name":"Motorola" , "action":"Buy" , "quantity":2, "price":743 , "marketPrice":806, "state":"Florida"} ,
                {"txnId":9 , "name":"Apple" , "action":"Buy" , "quantity":10, "price":573 , "marketPrice":535, "state":"Texas"} ,
                {"txnId":10 , "name":"Apple" , "action":"Sell" , "quantity":5, "price":584 , "marketPrice":627, "state":"Florida"} ,
                {"txnId":11 , "name":"Motorola" , "action":"Sell" , "quantity":12, "price":494 , "marketPrice":528, "state":"Georgia"} ,
                {"txnId":12 , "name":"Samsung" , "action":"Sell" , "quantity":3, "price":562 , "marketPrice":676, "state":"Florida"} ,
                {"txnId":13 , "name":"Apple" , "action":"Sell" , "quantity":20, "price":525 , "marketPrice":110, "state":"Texas"}
                ];  
     $scope.groups = [];
 console.log("CustomGridController-----------" );

     $scope.groupBy = function(attribute) {
        $scope.groups = [];
        sortOn( $scope.devices, attribute );
        var groupName = "TEMP_GROUP_NAME";
        for (var i = 0; i < $scope.devices.length; i++ ) {
            var fruit = $scope.devices[i];
            var fruitName = fruit[attribute];
            if (fruitName !== groupName) {
                var group = {
                    name: fruitName,
                    fruits: []
                };
                groupName = group.name;
                $scope.groups.push(group);
            }
            group.fruits.push(fruit);
        }
    };

        function sortOn(collection, name ) {
        collection.sort(
            function( a, b ) {
                if ( a[ name ] <= b[ name ] ) {
                    return( -1 );
                }
                return( 1 );
            }
        );
    }
    /*
     $scope.getFruits = function () {
         deviceFactory.getFruits()
            .then(function (response) {
                $scope.fruits = response.data.trades;
                console.log("Localhost: customGridController---getFruits--------" + $scope.fruits);
                angular.forEach($scope.fruits, function(value, index) {
                var thisFruit = $scope.fruits[index];
                    for(var d in thisFruit){
                    
                    }
                });
            }, function (error) {
                $scope.status = 'Unable to load fruit data: ' + error.message;
            });
    }




  
*/

}]);
