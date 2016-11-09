(function () {
    'use strict';

    var PrenomCtrl = function () {
        this.prenoms = ['Toto', 'Titi', 'Tata'];
    }

    PrenomCtrl.prototype.ajouter = function () {
        this.prenoms.push(this.prenom);
    };

    var app = angular.module('app', [])
    app.controller('PrenomCtrl', [PrenomCtrl]);

}());

