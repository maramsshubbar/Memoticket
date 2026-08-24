const Collection = require('../models/collection');
const Memory = require('../models/memory');

const index = async (req, res) => {
  const collections = await Collection.find({
    user: req.session.user._id,
  });

  res.render('collections/index.ejs', {
    collections,
  });
};

const show = async (req, res) => {
  const collection = await Collection.findOne({
    _id: req.params.id,
    user: req.session.user._id,
  });

  if (!collection) {
    return res.status(404).send('Collection not found');
  }

  const memories = await Memory.find({
    collection: req.params.id,
  });

  res.render('collections/show.ejs', {
    collection,
    memories,
  });
};

const newCollection = (req, res) => {
  res.render('collections/new.ejs');
};

const create = async (req, res) => {
  req.body.user = req.session.user._id;

  await Collection.create(req.body);

  res.redirect('/collections');
};

const edit = async (req, res) => {
  const collection = await Collection.findOne({
    _id: req.params.id,
    user: req.session.user._id,
  });

  if (!collection) {
    return res.status(404).send('Collection not found');
  }

  res.render('collections/edit.ejs', {
    collection,
  });
};

const update = async (req, res) => {
  const collection = await Collection.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.session.user._id,
    },
    req.body,
    { new: true }
  );

  if (!collection) {
    return res.status(404).send('Collection not found');
  }

  res.redirect(`/collections/${req.params.id}`);
};

const deleteCollection = async (req, res) => {
  const collection = await Collection.findOneAndDelete({
    _id: req.params.id,
    user: req.session.user._id,
  });

  if (!collection) {
    return res.status(404).send('Collection not found');
  }

  res.redirect('/collections');
};

module.exports = {
  index,
  show,
  new: newCollection,
  create,
  edit,
  update,
  delete: deleteCollection,
};