const { User, Highscore } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
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
            if (args.user_id) {
                const userData = await User.findById(args.user_id).select('highscores');
                return userData;
            }
            throw new AuthenticationError('Not logged in, or no user_id passed.');
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
            );

            return userData;            
        }
    }
};

module.exports = resolvers;