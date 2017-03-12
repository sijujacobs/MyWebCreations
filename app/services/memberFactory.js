'use strict';
//console.log("mcm::memberFactory----------");

App.factory('dataFactory', ['$http', function($http) {

    var urlBase = '/php/api/memberAPI.php';
    var dataFactory = {};

    dataFactory.getMembers = function () {
         console.log("mcm-Web::memberFactory---getMembers--------");

        return $http.get(urlBase+ '/?functionName=GET_MEMBERS');
    };

    dataFactory.getMember = function (id) {
        return $http.get(urlBase + '/?functionName=GET_MEMBER&memberId=' + id);
    };

    dataFactory.insertMember = function (member) {
        //console.log("memberFactory::insertMember:----");
        return $http.post(urlBase+ '/?functionName=INSERT_MEMBER', member);
    };

    dataFactory.updateMember = function (member) {
        return $http.put(urlBase + '/?functionName=UPDATE_MEMBER', member)
    };

    dataFactory.deleteMember = function (memberId) {
        console.log("memberFactory::deleteMember:----" + memberId);
        return $http.delete(urlBase + '/?functionName=VERIFY_MEMBER&memberId=' + memberId);
    };

    dataFactory.verifyMember = function (member) {
        console.log("mcm-Web::memberFactory---verifyMember--------");
        return $http.post(urlBase + '/?functionName=VERIFY_MEMBER', member);
    };
    

    return dataFactory;
}]);