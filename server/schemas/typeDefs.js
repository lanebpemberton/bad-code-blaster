const { gql } = require('apollo-server-express');

// typeDefs
const typeDefs = gql`
  
    type User {
        _id: ID
        username: String
        email: String
       
            
    }
    type Query {
        me: User
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