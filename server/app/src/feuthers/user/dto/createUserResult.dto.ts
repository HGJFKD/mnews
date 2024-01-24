import { createUnionType } from "@nestjs/graphql";
import { UserEntity } from "../entities/user.entity";
import { ApolloServerErrorCode } from '@apollo/server/errors';

export const createUserResult = createUnionType({
    name: 'createUserResult',
    types: () => [UserEntity] as const,

    resolveType(value) {
        if (value instanceof UserEntity) {
            return UserEntity;
        }

        // if (value instanceof ErrorResult) {
        //     const error = new ErrorResult()
        //         error.errorMessage = "User already exists!",
        //         error.code = ApolloServerErrorCode.BAD_USER_INPUT,
        //         error.statusCode = 400
        //     return error;
        // }

        return null;
    },
});


// @ObjectType()
// export class ErrorResult {

//     @Field()
//     errorMessage: string

//     @Field()
//     code: string

//     @Field()
//     statusCode: number
// }