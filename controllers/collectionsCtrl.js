const Collection = require('../models/collection');

const index = async (req,res) => {
    const collections = await Collection.find({
        user: req.session.user._id,
    });

    res.render('collections/index.ejs', {
        collections,
    });
};



const newCollection = (req,res)=> {
    res.render('collections/new.ejs');
};


const create = async (req,res) => {
    req.body.user = req.session.user._id;

    await Collection.create(req.body);
    res.redirect('/collections');
};

module.exports = {
    index,
    new:newCollection,
};