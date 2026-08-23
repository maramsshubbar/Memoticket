const mongoose = require('mongoose');
const collectionSchema = new mongoose.Schema (
    {
        name :{
            type: String,
            required: true,
        },
        description: {
        type: String,
        },

        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },

        createdAt: {
            type:Date,
            default: Date.now,
        },

    });

    const Collection = mongoose.model('Collection', collectionSchema);
    module.exports = Collection;