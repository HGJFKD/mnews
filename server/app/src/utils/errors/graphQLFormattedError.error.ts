import { ApolloServerErrorCode } from '@apollo/server/errors';
import { GraphQLError } from "graphql";

export const graphQLFormattedError = (formattedError, error: GraphQLError) => {
    if (
        formattedError.extensions.code ===
        ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED
      ) {
        return {
          ...formattedError,
          message: "Your query doesn't match the schema. Try double-checking it!",
        };
      }
    const graphQLFormattedError = {
        message: (error?.extensions?.exception as { response?: { message?: string } })?.response?.message || error?.message,
        code: error.extensions.code, 
        statusCode: (error?.extensions as { http?: { status?: number } })?.http?.status,
    };
    
    return graphQLFormattedError;
}