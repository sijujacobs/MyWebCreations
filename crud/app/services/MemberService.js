'use strict';
 
App.service('dataService', ['$http', function ($http) {

    var urlBase = '/php/member/memberAPI.php';

    this.getMembers = function () {
        console.log("memberService---------getMembers");
        
        return $http.get(urlBase);
    };

    this.getMember = function (id) {
        return $http.get(urlBase + '/' + id);
    };

    this.insertMember = function (cust) {
        return $http.post(urlBase, cust);
    };

    this.updateMember = function (cust) {
        return $http.put(urlBase + '/' + cust.ID, cust)
    };

    this.deleteMember = function (id) {
        return $http.delete(urlBase + '/' + id);
    };

}]);