var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PlaygroundSchecma = new Schema({

    name:{
        type: String,
        trim: true,
        required: true
    },

    lat:{
        type: Number,
        required: true
    },

    lng:{
        type: Number,
        required: true
    },

    outdoor:{
        type: Boolean,
        required: true
    },

    free: {
        type: Boolean,
        required: true
    },

    items: {
        slides: Boolean,
        swings: {
            exist: Boolean,
            infant: Boolean
        },
        crafts: Boolean,
        games: Boolean,
        climbing: Boolean,
        splashpad: Boolean
    }
    

},{
    timestamps : true
});


var Playground = mongoose.model("Playground", PlaygroundSchecma);

module.exports = Playground;