
'use strict';
var App = angular.module('myApp', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/templates/homePageTemplate.html'
        })
        .state('slider', {
            url: '/slider',
            templateUrl: 'app/views/templates/sliderPageTemplate.html',
            controller:'sliderController'
        })
        .state('grid', {
            url: '/grid',
            templateUrl: 'app/views/templates/gridPageTemplate.html',
            controller:'customGridController'
        })
       .state('crud', {
            url: '/crud',
            templateUrl: 'app/views/templates/crudPageTemplate.html',
            controller:'memberController'
        })
        .state('event', {
            url: '/event',
            templateUrl: 'app/views/templates/eventPageTemplate.html'
        });
});


