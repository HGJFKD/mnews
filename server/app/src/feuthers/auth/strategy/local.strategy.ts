import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

import { AuthService } from "../service/auth.service";
import { UserEntity } from "../../user/entities/user.entity";
import { GraphQLErrorResponse } from "src/utils/errors/graphQLErrorResponse";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: 'email'
        })
    }

    async validate(email: string, password: string): Promise<UserEntity> {
        const user = await this.authService.validateUser(email, password)
        if (!user) throw GraphQLErrorResponse(
            "User does not exist!",
            'Unauthorized',
            401
        )
        return user
    }
}