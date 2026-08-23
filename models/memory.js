const mongoose = require('mongoose');
const memorySchema = new mongoose.Schema (
    {
       title: {
        type: String,
        required: true,
       },


       date: {
        type: Date,
       },


       location: {
        type: String,
       },

       category: {
        type: String,
       },


       rating: {
        type: Number,
        min: 1,
        max : 5,
       },

       description: {
        type: String,
        },

        imageUrl: {
        type: String,
        },

        ticketNumber: {
        type: String,
        },

        // The user who owns this memory
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },


          // The collection this memory belongs to
        collection: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Collection',
            required: true,
        },

        createdAt: {
            type:Date,
            default: Date.now,
        },

        updatedAt: {
            type: Date,
            default : Date.now,
        },



    }
)

const Memory = mongoose.model('Memory', memorySchema);
module.exports = Memory;