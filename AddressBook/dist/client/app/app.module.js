define([
    'app/contact-list/contact-list.controller',
    'app/contact-add/contact-add.controller',
    ], function (contactListCtrl, contactAddCtrl) {
    'use strict';

    var app = angular.module('app.module', [
        'ngRoute',
        contactListCtrl,
        contactAddCtrl,
    ]);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        // pas de # dans les URL (à partir de IE10)
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            controller: 'ContactListCtrl',
            templateUrl: 'app/contact-list/contact-list.template.html'
        });

        $routeProvider.when('/ajouter', {
            controller: 'ContactAddCtrl',
            templateUrl: 'app/contact-add/contact-add.template.html'
        });

        //$routeProvider.otherwise('/');



    }]);

    // remplace <html ng-app="app.module" ng-strict-di>
    angular.bootstrap(document, [app.name], {
        strictDi: true
    });

    return app.name;
});
