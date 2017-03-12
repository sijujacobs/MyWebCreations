'use strict';
console.log("mcm::homePageFactory----------");

App.factory('homePageFactory', ['$http', function($http) {

    var urlBase = '/php/api/homePageAPI.php';
    //var urlBase = "/php/api/testAPI.php/";
    var dataFactory = {};

    dataFactory.getHomePageContents = function () {
         console.log("mcm::homePageFactory---getHomePageContents--------");

        return $http.get(urlBase+ '/?functionName=GET_HPCONTENTS');
    };

    dataFactory.updateHomePageContents = function (homePageData) {
        console.log("mcm::homePageFactory---updateHomePageContents--------homePageData: " + homePageData);

        return $http.put(urlBase + '/?functionName=UPDATE_HPCONTENTS', homePageData);
    };

    dataFactory.verifyMember = function (member) {
        return $http.post('/php/api/memberAPI.php/?functionName=VERIFY_MEMBER', member);
        //return $http.post('/php/api/testAPI.php/');
    };

    

    return dataFactory;
}]);