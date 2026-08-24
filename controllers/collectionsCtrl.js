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
  console.log('CREATE BODY:', req.body);
  console.log('SESSION USER:', req.session.user);

  req.body.user = req.session.user._id;

  const collection = await Collection.create(req.body);

  console.log('CREATED COLLECTION:', collection);

  res.redirect('/collections');
};

module.exports = {
  index,
  show,
  new: newCollection,
  create,
};