'use strict';
//console.log("localhost::fruitFactory----------");
App.factory('fruitFactory', ['$http', function($http) {
    //var urlBase = '/php/api/fruitsAPI.php';
    var urlBase = '/php/api/fruits.json';
    var fruitFactory = {};
    fruitFactory.getFruits = function (member) {
       //console.log("fruitFactory::getFruits:-----------");
        return $http.post(urlBase);
    };
    return fruitFactory;
}]);
