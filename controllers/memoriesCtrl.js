const Memory = require('../models/memory');

const newMemory = (req, res) => {
  const collectionId = req.params.collectionId;

  res.render('memories/new.ejs', {
    collectionId,
  });
};

const create = async (req, res) => {
  try {
    req.body.collection = req.params.collectionId;
    req.body.user = req.session.user._id;

    if (req.file) {
      req.body.imageUrl = req.file.path;
    }

    await Memory.create(req.body);

    res.redirect(`/collections/${req.params.collectionId}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const edit = async (req, res) => {
  const memory = await Memory.findOne({
    _id: req.params.id,
  }).populate('collection');

  if (
    !memory ||
    memory.collection.user.toString() !== req.session.user._id.toString()
  ) {
    return res.status(404).send('Memory not found');
  }

  res.render('memories/edit.ejs', {
    memory,
  });
};

const update = async (req, res) => {
  const memory = await Memory.findOne({
    _id: req.params.id,
  }).populate('collection');

  if (
    !memory ||
    memory.collection.user.toString() !== req.session.user._id.toString()
  ) {
    return res.status(404).send('Memory not found');
  }

  if (req.file) {
    req.body.imageUrl = req.file.path;
  }

  await Memory.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/collections/${req.params.collectionId}`);
};

const deleteMemory = async (req, res) => {
  const memory = await Memory.findOne({
    _id: req.params.id,
    user: req.session.user._id,
  });

  if (!memory) {
    return res.status(404).send('Memory not found');
  }

  await Memory.findByIdAndDelete(req.params.id);

  res.redirect('/memories');
};

const index = async (req, res) => {
  try {
    const memories = await Memory.find({
      user: req.session.user._id,
    })
      .populate('collection')
      .sort({ createdAt: -1 });

    res.render('memories/index.ejs', {
      memories,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  new: newMemory,
  create,
  edit,
  update,
  delete: deleteMemory,
  index,
};