import { GraphQLError } from "graphql";

import { userService } from "../services/userService.js";
import { User } from "../types/users.js";
import { autoToken, createToken } from "../middlewares/token.js";
import { validate } from "../utils/validate.js";

type resUser = {
  user: User,
  token: string
}

type DeleteInput = {
  user_id: string;
  token: string;
};

export const resolvers = {
  Query: {
    getAllUsers: () => userService.allUsers(),

  },
  Mutation: {
    register: async (parent: any, args: { input: User }) => {

      const { first_name, last_name, email, password, phone, permissions } = args.input

      const newUser: User = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        phone: phone,
        permissions: permissions
      };

      // Check if the user already exists
      const existingUser = await userService.getUserByEmailService(email);
      if (existingUser.rows.length > 0) {
        throw new GraphQLError("User already exists", { extensions: { http: { status: 400 } } });
      }

      userService.register(newUser);
      return newUser
    },

    login: async (parent: any, args: { input: User }) => {

      const { email, password, permissions } = args.input

      const user: resUser = await validate.validateLogin(email, password);
      if (!user) {
        throw new GraphQLError("login failed", { extensions: { http: { status: 400 } } });
      }
      //   create token
      const token = createToken(email, permissions);
      user.token = token
      return user
    },


    deleteUser: async (parent: any, args: { input: DeleteInput }) => {
      try {
        const decodedToken = await autoToken(args.input.token);
        if (!decodedToken) {
          throw new GraphQLError("Not authorized to delete a user", { extensions: { http: { status: 403 } } });
        }
        const response = await userService.deleteUser(args.input.user_id);
        if (!response) {
          throw new GraphQLError("Failed to delete user", { extensions: { http: { status: 500 } } });
        }
        return { message: "User deleted successfully" };
      } catch (error) {
        console.error("Error deleting user:", error);
        throw new GraphQLError("An error occurred during user deletion", { extensions: { http: { status: 500 } } });
      }
    },

  }
}