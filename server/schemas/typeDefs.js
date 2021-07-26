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
        user_id: String
        ship_id: String
        score: Int
        time_alive: Int  
        enemies_killed: Int
        bad_code_blasted: Int
        timestamp: String
    }

    type Query {
        me: User
        getUserHighScore(user_id: ID): [Highscore]
    }

    type Auth {
    token: ID!
    user: User
    }
  
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
        changeShip(user_id: ID, ship_id: ID): User
    }
`;

// export the typeDefs
module.exports = typeDefs;