const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  
    type User {
        _id: ID
        username: String
        email: String
        current_ship: Ship
        highscores: [Highscore]    
    }

    type Ship {
        ship_name: String
        speed: Int
        hull_strength: Int
        ship_description: String
        sprite: String
        width: Int
        height: Int
    }

    type Highscore {
        user_id: User
        ship_id: Ship
        score: Int
        time_alive: Int  
        enemies_killed: Int
        bad_code_blasted: Int
        timestamp: String
    }

    type Query {
        me: User
        getUserHighScore(user_id: ID): [Highscore]
        getTop25: [Highscore]
    }

    type Auth {
    token: ID!
    user: User
    }
  
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!, current_ship: ID): User
        changeShip(user_id: ID, ship_id: ID): User
        addHighscore(user_id: ID, ship_id: ID, score: Int, time_alive: Int, enemies_killed: Int, bad_code_blasted: Int): Highscore
    }
`;

module.exports = typeDefs;