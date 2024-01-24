import { Field, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "src/feuthers/user/entities/user.entity";

@ObjectType()
export class SigninResponse {

    @Field()
    access_token: string

    @Field(() => UserEntity)
    user: UserEntity
}