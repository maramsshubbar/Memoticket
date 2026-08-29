const bcrypt = require('bcrypt');
const User = require('../models/user');

const SALT_ROUDS = 10;

const signup = async (req, res) => {
  res.render('auth/sign-up.ejs', {
    error: null,
  });
};

const register = async (req, res) => {
  try {
    const userInDatabase = await User.findOne({
      username: req.body.username,
    });

    if (userInDatabase) {
      return res.render('auth/sign-up.ejs', {
        error: 'Username is already taken.',
      });
    }

    if (req.body.password !== req.body.confirmPassword) {
      return res.render('auth/sign-up.ejs', {
        error: 'Passwords do not match.',
      });
    }

    const hashedPassword = bcrypt.hashSync(
      req.body.password,
      SALT_ROUDS
    );

    req.body.password = hashedPassword;

    const user = await User.create(req.body);

    req.session.user = {
      username: user.username,
      _id: user._id,
    };

    req.session.save(() => {
      res.redirect('/collections');
    });
  } catch (err) {
    res.render('auth/sign-up.ejs', {
      error: 'Something went wrong. Please try again.',
    });
  }
};

const signin = async (req, res) => {
  res.render('auth/sign-in.ejs', {
    error: null,
  });
};

const login = async (req, res) => {
  const userInDatabase = await User.findOne({
    username: req.body.username,
  });

  if (!userInDatabase) {
    return res.render('auth/sign-in.ejs', {
      error: 'Invalid username or password.',
    });
  }

  const passwordMatch = bcrypt.compareSync(
    req.body.password,
    userInDatabase.password
  );

  if (!passwordMatch) {
    return res.render('auth/sign-in.ejs', {
      error: 'Invalid username or password.',
    });
  }

  req.session.user = {
    username: userInDatabase.username,
    _id: userInDatabase._id,
  };

  req.session.save(() => {
    res.redirect('/collections');
  });
};

const signout = async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

module.exports = {
  signup,
  register,
  signin,
  login,
  signout,
};