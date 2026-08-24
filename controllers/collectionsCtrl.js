const Collection = require('../models/collection');

const index = async (req, res) => {
  const collections = await Collection.find({
    user: req.session.user._id,
  });

  res.render('collections/index.ejs', {
    collections,
  });
};

const show = async (req, res) => {
  const collection = await Collection.findById(req.params.id);

  res.render('collections/show.ejs', {
    collection,
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
  const collection = await Collection.findById(req.params.id);

  res.render('collections/edit.ejs', {
    collection,
  });
};


const update = async (req, res) => {
  await Collection.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/collections/${req.params.id}`);
};

module.exports = {
  index,
  show,
  new: newCollection,
  create,
  edit,
  update,
};