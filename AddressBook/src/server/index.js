const express = require('express');
const contactRoutes = require('./routes/contact');
const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.connect('mongodb://localhost/addressbook');

var app = express();

app.use(morgan('dev'));

app.use('/api/v1.0/contacts', contactRoutes);

// appelé si next()
app.use('/api', function(req, res, next) {
    res.statusCode = 404;
    res.json({
        code: 404,
        message: `Page not found`
    });
});

// appelé si next('message')
app.use('/api', function(err, req, res, next) {
    res.statusCode = 500;
    res.json({
        code: 500,
        message: err
    });
});

app.listen(80, function() {
    console.log('App started on port 80');
});