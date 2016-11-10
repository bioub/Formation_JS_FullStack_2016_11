define([], function() {
    'use strict';

    var module = angular.module('contact-add.controller', [])
        .controller('ContactAddCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
            
            $scope.ajouter = function() {
                $http.post('/api/v1.0/contacts', $scope.contact)
                    .then(function() {
                        $location.path('/');
                    });
            };

        }]);

    return module.name;
});