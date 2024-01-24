export const typeDefs = `#graphql


  # This "User" type defines the queryable fields for every User in our data source.

  type User {
    user_id: String
    first_name: String
    last_name: String
    email: String
    password: String
    permissions: String
    token: String
  }
  
   # Input type for adding a user
  input RegisterInput {
    first_name: String
    last_name: String
    email: String
    password: String
}
  input LoginInput {
    email: String
    password: String
}

 input DeleteInput {
    user_id: String
    token: String
}

type DeleteUserResponse {
  message: String
}
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    getAllUsers: [User]
    register(input: RegisterInput): User
  }
  # The "Mutation" type is used for modifying data on the server
  type Mutation {
    register(input: RegisterInput): User
    login(input:LoginInput):User
    deleteUser(input:DeleteInput):DeleteUserResponse
  }
`;