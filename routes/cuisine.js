var express = require('express');
var router = express.Router();
var cuisineCtrl = require('../controllers/cuisine');

router.get('/', cuisineCtrl.index);
router.get('/new', cuisineCtrl.new);
router.post('/', cuisineCtrl.create);

module.exports = router;
