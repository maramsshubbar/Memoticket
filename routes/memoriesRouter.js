const express = require('express');

const pagesCtrl = require('../controllers/pagesCtrl');
const memoriesCtrl = require('../controllers/memoriesCtrl');

const router = express.Router();

router.get('/', memoriesCtrl.index);

router.get('/new', memoriesCtrl.new);

router.post('/', memoriesCtrl.create);

router.get('/:id/edit', memoriesCtrl.edit);

router.put('/:id', memoriesCtrl.update);

router.delete('/:id', memoriesCtrl.delete);

module.exports = router;