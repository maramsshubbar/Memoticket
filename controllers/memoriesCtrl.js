const Memory = require('../models/memory');

const newMemory = (req, res) => {
  const collectionId = req.params.collectionId;

  res.render('memories/new.ejs', {
    collectionId,
  });
};

const create = async (req, res) => {
  req.body.collection = req.params.collectionId;

  await Memory.create(req.body);

  res.redirect(`/collections/${req.params.collectionId}`);
};

module.exports = {
  new: newMemory,
  create,
};