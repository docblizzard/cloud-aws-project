import gql from "graphql-tag";

export const typeDefs = gql`


  type Doctor {
    id: ID!
    name: String
    speciality: Speciality
    addresses: [Address]
  }

  type Address {
    zipCode: String
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    numberOfViews: Int!
    numberOfLikes: Int!
  }

  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Film { 
    id: ID!
    title: String
    people: [People]!
  }

  type People {
    id: ID!
    name: String
    eyeColor: String
    films: [Film]!
  }
 
  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    doctor(id: ID!): Doctor
    divide(number1: Int!, number2: Int!): Float!
    multiply(number1: Int!, number2: Int!): Float!
    closestColor(color: String!): String!
    getTracks: [Track!]!
    getFilms: [Film]!
    getPeople: [People]!
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
    incrementLikes(id: ID!): IncrementLikesResponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
  }

  type User {
    id: ID!
    username: String!
  }

  type CreateUserResponse {
    code: Int!
    message: String!
    success: Boolean!
    user: User
  }
  
  type SignInResponse {
    code: Int!
    message: String!
    success: Boolean!
    token: String
  }

  type IncrementLikesResponse {
    code: Int!
    message: String!
    success: Boolean!
    track: Track
  }

  type IncrementTrackViewsResponse {
    code: Int!
    message: String!
    success: Boolean!
    track: Track
  }
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }
`;