angular.module('app.module', [])
    .controller('PrenomCtrl', ['$scope', function ($scope) {
        $scope.prenoms = ['Toto', 'Titi', 'Tata'];

        $scope.ajouter = function() {
            $scope.prenoms.push($scope.prenom);
        };
    }]);