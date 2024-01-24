import { Field, InputType } from "@nestjs/graphql";
import {
    IsEnum,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

import { UserPermissions } from "../types/user.type";

@InputType()
export class UserInput {

    @Field(type => Number, { nullable: true })
    id?: number;
    
    @IsString()
    @MinLength(2, { message: 'lastName must have atleast 2 characters.' })
    @IsNotEmpty()
    @Field()
    firstName: string

    @IsString()
    @MinLength(2, { message: 'lastName must have atleast 2 characters.' })
    @IsNotEmpty()
    @Field()
    lastName: string

    @Matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, {
        message: 'email must be a valid email',
      })
    @Field()
    email: string;

    @Matches(
        /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/,
        {
          message:
            'Password must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        },
      )
    @Field()
    password: string;

    @IsString()
    @IsEnum(UserPermissions)
    @Field()
    permissions: UserPermissions;

}