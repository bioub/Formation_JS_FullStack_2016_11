define(['app/contact-list/contact-list.controller'], function (contactListCtrl) {
    'use strict';

    var app = angular.module('app.module', [
        'ngRoute',
        contactListCtrl
    ]);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        // pas de # dans les URL (à partir de IE10)
        $locationProvider.html5Mode(true);

        $routeProvider.when('/', {
            controller: 'ContactListCtrl',
            templateUrl: 'app/contact-list/contact-list.template.html'
        });

        //$routeProvider.otherwise('/');



    }]);

    // remplace <html ng-app="app.module" ng-strict-di>
    angular.bootstrap(document, [app.name], {
        strictDi: true
    });

    return app.name;
});
