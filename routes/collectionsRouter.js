const express = require('express');
const router = express.Router();

const collectionsCtrl = require('../controllers/collectionsCtrl');

router.get('/new', collectionsCtrl.new);

module.exports = router;