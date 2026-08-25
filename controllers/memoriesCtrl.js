const Memory = require('../models/memory');

const newMemory = (req, res) => {
  const collectionId = req.params.collectionId;

  res.render('memories/new.ejs', {
    collectionId,
  });
};


console.log('CLOUDINARY TEST:', {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY ? 'EXISTS' : 'MISSING',
  api_secret: process.env.CLOUDINARY_API_SECRET ? 'EXISTS' : 'MISSING',
});

const create = async (req, res) => {
  console.log('========== CREATE MEMORY ==========');
  console.log('BODY:', req.body);
  console.log('FILE:', req.file);
  console.log('PARAMS:', req.params);
  console.log('USER:', req.session.user);

  try {
    req.body.collection = req.params.collectionId;
    req.body.user = req.session.user._id;

    if (req.file) {
      req.body.imageUrl = req.file.path;
    }

    const memory = await Memory.create(req.body);

    console.log('MEMORY CREATED:', memory);

    res.redirect(`/collections/${req.params.collectionId}`);
  } catch (error) {
    console.log('========== ERROR ==========');
    console.log(error);
    console.log('MESSAGE:', error.message);
    console.log('STACK:', error.stack);

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

  await Memory.findByIdAndUpdate(req.params.id, req.body);

  res.redirect(`/collections/${req.params.collectionId}`);
};

const deleteMemory = async (req, res) => {
  const memory = await Memory.findOne({
    _id: req.params.id,
  }).populate('collection');

  if (
    !memory ||
    memory.collection.user.toString() !== req.session.user._id.toString()
  ) {
    return res.status(404).send('Memory not found');
  }

  await Memory.findByIdAndDelete(req.params.id);

  res.redirect(`/collections/${req.params.collectionId}`);
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
    console.log(error);
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