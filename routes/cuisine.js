var express = require('express');
var router = express.Router();
var cuisineCtrl = require('../controllers/cuisine');

router.get('/', cuisineCtrl.index);
router.get('/new', cuisineCtrl.new);
router.post('/', cuisineCtrl.create);
router.get('/:id', cuisineCtrl.show);
router.post('/:id', cuisineCtrl.delete);
router.get('/update/:id', cuisineCtrl.showUpdate);
router.post('/update/:id', cuisineCtrl.update);

module.exports = router;
