const home = async (req, res) => {
  res.render('index.ejs');
};


const about = (req, res) => {
  res.render('about');
};


const Memory = require('../models/memory');

const memories = async (req, res) => {
  const allMemories = await Memory.find({
    user: req.session.user._id,
  }).sort({ date: -1 });

  res.render('memories/index.ejs', {
    memories: allMemories,
  });
};


module.exports = {
  home,
  about,
  memories,
};
