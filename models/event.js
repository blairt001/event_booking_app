const mongoose = require('mongoose');

const schema = mongoose.Schema;

const eventSchema = new Schema({
    // define a structure for the event object
    // we keep both the two schemas in sync (both the mongoDB and the GraphQL Schema)
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});