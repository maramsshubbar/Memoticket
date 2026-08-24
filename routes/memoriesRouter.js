const express = require('express');

const router = express.Router();

const memoriesCtrl = require('../controllers/memoriesCtrl');

console.log('MEMORIES CTRL:', memoriesCtrl);

router.get('/new', memoriesCtrl.new);

router.post('/', memoriesCtrl.create);

module.exports = router;