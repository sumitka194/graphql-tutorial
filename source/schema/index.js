import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    state(id: Int!): State
    vehicle(id: Int!): Vehicle
    user(id: Int!): User
  }
  type State {
    id: Int
    name: String
  }
  type Vehicle {
    id: Int
    name: String
  }
  type User {
    id: Int
    name: String
    major: String
    state: State
    vehicle: Vehicle
  }
`);

export default schema;
