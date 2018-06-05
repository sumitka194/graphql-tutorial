import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    login(username: String!, password: String!): String!
    getUserDetails: User!
  }
  type Mutation {
    signup(username: String!, password: String!): String!
    updateUser(username: String, password: String): User!
    deleteUser: String!
  }
  type User {
    id: Int
    username: String!
    password: String!
  }
`);

export default schema;
