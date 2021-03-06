const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        current_ship: {
            type: Schema.Types.ObjectId,
            ref: 'Ship'
        },
        highscores: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Highscore'
            }
        ]
        
    },
        
    {
        toJSON: {
            virtuals: true,
        },
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


//A virtual may be useful for calculating highscores, or maybe something else
  
const User = model('User', userSchema);
  
module.exports = User;

