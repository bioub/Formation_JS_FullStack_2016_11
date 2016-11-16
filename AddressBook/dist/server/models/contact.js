const mongoose = require('mongoose');

var Contact = mongoose.model('contacts', {
    prenom: {
        type: String,
        required: true
    },
    nom: String,
});

module.exports = Contact;
