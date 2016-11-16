const Contact = require('../models/contact');

/*
// Ajouter
var contact = new Contact({prenom: 'Toto', nom: 'Titi'});
contact.save(function(err, contact) {

});

// Lecture
Contact.find({}, 'prenom nom', function(err, contacts) {

});

*/

module.exports.list = function(req, res, next) {
    Contact.find({}, 'prenom nom', function(err, contacts) {
        if (err) {
            return next(err);
        }
        res.json(contacts);
    });
};

module.exports.show = function(req, res, next) {
    var id = req.params.id;

    Contact.findById(id, function(err, contact) {
        if (err) {
            return next(err); // 500
        }

        if (!contact) {
            return next(); // 404
        }

        res.json(contact);
    });
};

module.exports.add = function(req, res, next) {
    var body = req.body; // req.body créé par bodyParser

    var contact = new Contact(body);
    contact.save(function(err, contact) {
        if (err) {
            return next(err);
        }

        res.statusCode = 201; // CREATED
        res.json(contact); // en plus _id
    });
};

