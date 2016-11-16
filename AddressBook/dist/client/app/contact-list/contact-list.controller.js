define([], function() {
    'use strict';

    var module = angular.module('contact-list.controller', [])
        .controller('ContactListCtrl', ['$scope', '$http', function ($scope, $http) {
            
            $scope.contacts = [];

            $http.get('/api/v1.0/contacts')
                .then(function(response) {
                    $scope.contacts = response.data;
                });

        }]);

    return module.name;
});