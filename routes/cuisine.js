var express = require('express');
var router = express.Router();
var cuisineCtrl = require('../controllers/cuisine');

/* GET  cuisine/new */
router.get('/new', cuisineCtrl.new);

module.exports = router;
