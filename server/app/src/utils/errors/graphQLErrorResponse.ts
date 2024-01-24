import { GraphQLError } from "graphql";

export const GraphQLErrorResponse = (
    message: string,
    code: string,
    statusCode: number
) => {
    return new GraphQLError(
        message,
        {
            extensions: {
                code: code,
                http: {
                    status: statusCode
                }
            }
        })
}