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

module.exports = {
    index,
    new:newCollection,
};