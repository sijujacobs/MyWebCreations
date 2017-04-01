'use strict';

App.factory('dataFactory', ['$http', function($http) {

    var urlBase = '/php/member/memberAPI.php';
    var dataFactory = {};

    dataFactory.getMembers = function () {
        return $http.get(urlBase);
    };

    dataFactory.getMember = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    dataFactory.insertMember = function (member) {
        //console.log("memberFactory::insertMember:----");
        return $http.post(urlBase, member);
    };

    dataFactory.updateMember = function (member) {
        return $http.put(urlBase + '/', member)
    };

    dataFactory.deleteMember = function (memberId) {
        console.log("memberFactory::deleteMember:----" + memberId);
        return $http.delete(urlBase + '/?memberId=' + memberId);
    };

    return dataFactory;
}]);