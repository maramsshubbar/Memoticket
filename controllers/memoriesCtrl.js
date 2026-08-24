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


const edit = async (req, res) => {
  const memory = await Memory.findById(req.params.id);

  res.render('memories/edit.ejs', {
    memory,
  });
};

const update = async (req, res) => {
  await Memory.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/collections/${req.params.collectionId}`);
};

const deleteMemory = async (req, res) => {
  await Memory.findByIdAndDelete(req.params.id);

  res.redirect(`/collections/${req.params.collectionId}`);
};

module.exports = {
  new: newMemory,
  create,
  edit,
  update,
    delete: deleteMemory,

};