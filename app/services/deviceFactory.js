'use strict';
//console.log("localhost::deviceFactory----------");
App.factory('deviceFactory', ['$http', function($http) {
    //var urlBase = '/php/api/fruitsAPI.php';
    var urlBase = '/php/api/fruits.json';
    var deviceFactory = {};
    deviceFactory.getDevices = function (member) {
       //console.log("fruitFactory::getFruits:-----------");
        return $http.post(urlBase);
    };
    return deviceFactory;
}]);
