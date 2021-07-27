const { Schema, Types, model } = require('mongoose');


const highscoreSchema = new Schema(
    {
        user_id: {
            type: Types.ObjectId,
            ref: 'User'
        }, 
         ship_id: {
             type: Types.ObjectId,
             ref: 'Ship'
         },
         score: {
             type: Number,
             required: true,
         },
         time_alive: {
             type: Number,
             required: true,
         },
         enemies_killed:
         {
             type: Number,
             required: true,
         },
         bad_code_blasted: 
         {
             type: Number,
             required: true,
         },
        timestamp:
        {
            type: Date,
            required: true,

        } 
     },
);

  
const highscores = model('Highscore', highscoreSchema);
  
module.exports = highscores;
