const home = async (req, res) => {
  res.render('index.ejs');
};

module.exports = {
  home,
};
