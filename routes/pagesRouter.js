const express = require('express');

const pagesCtrl = require('../controllers/pagesCtrl');

const router = express.Router();

router.get('/', pagesCtrl.home);
router.get('/about', pagesCtrl.about);
router.get('/memories', pagesCtrl.memories);

module.exports = router;