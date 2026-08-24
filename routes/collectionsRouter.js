const express = require('express');

const router = express.Router();

const collectionsCtrl = require('../controllers/collectionsCtrl');

router.get('/', collectionsCtrl.index);

router.get('/new', collectionsCtrl.new);

router.post('/', collectionsCtrl.create);

router.get('/:id/edit', collectionsCtrl.edit);

router.put('/:id', collectionsCtrl.update);

router.get('/:id', collectionsCtrl.show);

module.exports = router;