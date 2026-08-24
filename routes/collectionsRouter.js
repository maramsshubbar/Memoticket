const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collectionsCtrl');
router.get('/', collectionsCtrl.index);
router.get('/new', collectionsCtrl.new);
router.post('/', collectionsCtrl.create);
module.exports = router;