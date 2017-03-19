'use strict';

App.controller('fruitController', ['$scope', 'fruitFactory', function ($scope, fruitFactory) {
    //console.log("Localhost::fruitController-----------");
     $scope.totalFruitBought = 0;
     $scope.totalFruitSold = 0;
     $scope.totalBuyAmount = 0;
     $scope.totalSellAmount = 0;
     $scope.profitLoss = 0; 

     $scope.getFruits = function () {
         //console.log("Localhost: fruitController---getFruits--------");
         fruitFactory.getFruits()
            .then(function (response) {
                $scope.fruits = response.data.trades;
                calculateProfitLoss();
            }, function (error) {
                $scope.status = 'Unable to load fruit data: ' + error.message;
            });
    }

    function calculateProfitLoss(){
        var filteredFruits = [];
        angular.forEach($scope.fruits, function(fruit){
            if(fruit.Symbol == "Pineapple"){
                if(fruit.Action == "Buy"){
                    $scope.totalFruitBought += fruit.Quantity;
                    $scope.totalBuyAmount += fruit.Price;
                }else{
                    $scope.totalFruitSold += fruit.Quantity;
                    $scope.totalSellAmount += fruit.Price;
                }
            };
        // filteredFruits.push(angular.extend({}, fruit, {act:Action}))
        });
        //console.log("totalFruitBought--- : " + $scope.totalFruitBought);
        //console.log("totalFruitSold--- : " + $scope.totalFruitSold);
        $scope.profitLoss  = ($scope.totalSellAmount * $scope.totalFruitSold) - ($scope.totalBuyAmount * $scope.totalFruitBought);
        //console.log("pineApplePL--- : " + $scope.profitLoss );
    }

    $scope.gridOptions = { 
        data: 'gridData',
            columnDefs: [
                {field: 'Symbol', displayName: 'Symbol'}, 
                {field:'Action', displayName: 'Action'}
            ],
    };

    $scope.gridData = $scope.fruits;
    $scope.sortFruitsByName = function() {
        return function(object) {
            return object.Symbol;
        }
    }
}]);





