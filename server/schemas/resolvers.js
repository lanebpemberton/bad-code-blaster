const { User, Highscore } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const mongoose = require('mongoose');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        getUserHighScore: async (parent, args, context) => {
            const scoreData = await Highscore.find({user_id: args.user_id}).populate('user_id').populate('ship_id')
            return scoreData;
        },
        getTop25: async (parent, args, context) => {
            const scoreData = await Highscore.find({}).limit(25).sort({ score: -1 }).populate('user_id').populate('ship_id')
            return scoreData;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            // const token = signToken(user);

            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            // const token = signToken(user);
            return user;
        }, 
        changeShip: async (parent, args, context) => {
            const userData = await User.findByIdAndUpdate(args.user_id, 
                {
                    $set: {
                        current_ship: args.ship_id
                    }
                }
            ).populate('current_ship');

            return userData;            
        },
        addHighscore: async (parent, args, context) => {
            const dateAdded = new Date();

            const newHighscore = {
                user_id: args.user_id,
                ship_id: args.ship_id,
                score: args.score,
                time_alive: args.time_alive,
                enemies_killed: args.enemies_killed,
                bad_code_blasted: args.bad_code_blasted,
                timestamp: dateAdded,
            }

            const createdScore = await Highscore.create(newHighscore);
            const userData = await User.findByIdAndUpdate(args.user_id, 
                {
                    $push: {
                        highscores: createdScore._id
                    }
                },
                {
                    new: true,
                    runValidators: true,
                }
            )
            return createdScore;
        }
    }
};

module.exports = resolvers;