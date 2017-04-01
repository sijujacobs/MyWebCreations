'use strict';
console.log("mcm::homePageFactory----------");

App.factory('homePageFactory', ['$http', function($http) {

    var urlBase = '/php/homepage/manageHomepageAPI.php';
    var dataFactory = {};

    dataFactory.getHomePageContents = function () {
         console.log("mcm::homePageFactory---getHomePageContents--------");

        return $http.get(urlBase+ '/?functionName=GET_HPCONTENTS');
    };

    dataFactory.updateHomePageContents = function () {
        return $http.get(urlBase + '/?functionName=UPDATE_HPCONTENTS');
    };

    

    return dataFactory;
}]);