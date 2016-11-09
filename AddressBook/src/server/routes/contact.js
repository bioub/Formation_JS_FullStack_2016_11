const Router = require('express').Router;
const contact = require('../controllers/contact');
const bodyParser = require('body-parser');

var router = new Router();

// List
router.get('/', contact.list);

// Add
router.post('/', bodyParser.json(), contact.add);

// Show

router.get('/:id', contact.show);

// Modify
// router.put('/:id', contact.modify);

// Delete
// router.delete('/:id', contact.delete);



module.exports = router;