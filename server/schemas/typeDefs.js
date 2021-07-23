const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  
    type User {
        _id: ID
        username: String
        email: String
        
            
    }
    type Ship {
        ship_name: String
        speed: Number
        hull_strength: Number
        ship_description: String
        sprite: String
        width: Number
        height: Number





    }

    type Highscore {
        user_id: String
        ship_id: String
        score: Number
        time_alive: Number  
        enemies_killed: Number
        bad_code_blasted: Number
        timestamp: Date


    }
    type Query {
        me: User
        getUserHighScore(user_id: ID): [Highscores]
    }
    type Auth {
    token: ID!
    user: User
    }
  
    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, email: String!, password: String!): User
    }
`;

// export the typeDefs
module.exports = typeDefs;