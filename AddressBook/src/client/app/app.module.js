define(['app/contact-list/contact-list.controller'], function (contactListCtrl) {
    'use strict';

    var app = angular.module('app.module', [
        'ngRoute',
        contactListCtrl
    ]);

    app.config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            controller: 'ContactListCtrl',
            templateUrl: 'app/contact-list/contact-list.template.html'
        });

        $routeProvider.otherwise('/');



    }]);

    // remplace <html ng-app="app.module" ng-strict-di>
    angular.bootstrap(document, [app.name], {
        strictDi: true
    });

    return app.name;
});
