const express = require('express');

const router = express.Router({ mergeParams: true });

const memoriesCtrl = require('../controllers/memoriesCtrl');



const upload = require("../config/multer");

router.get('/', memoriesCtrl.index);

router.get('/new', memoriesCtrl.new);

router.post('/', upload.single('image'), memoriesCtrl.create);

router.get('/:id/edit', memoriesCtrl.edit);

router.put('/:id', upload.single('image'), memoriesCtrl.update);

router.delete('/:id', memoriesCtrl.delete);

module.exports = router;