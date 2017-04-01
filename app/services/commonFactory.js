'use strict';
App.factory('commonFactory', ['$http', function($http) {
    var commonFactory = {};
    var commonData = "";
    commonFactory.setCommonData = function (cValue) {
       //console.log("commonFactory::setData:-----------");
        commonData = cValue;
    };
    commonFactory.getCommonData = function () {
       //console.log("commonFactory::setData:-----------");
        return commonData;
    };
    
    
    return commonFactory;
}]);
