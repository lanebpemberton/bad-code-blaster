const { Schema, model } = require('mongoose');

const shipSchema = new Schema(
    {
       ship_name: {
           type: String,
           required: true,
           unique: true,

        },
        speed: {
            type: Number,
            required: true,
        },
        hull_strength: {
            type: Number,
            required: true,
        },
        ship_description: {
            type: String,
            required: true,
            unique: true,
        },
        sprite: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height:
        {
            type: Number,
            required: true,
        },

    },

);    



const Ship = model('Ship', shipSchema);

module.exports = Ship;
