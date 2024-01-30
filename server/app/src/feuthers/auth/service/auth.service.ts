import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '../../user/service/user.service';
import { UserInput } from '../../user/dto/user.input';
import { createUserResult } from '../../user/dto/createUserResult.dto';
import { UserResolver } from '../../user/resolver/user.resolver';
import { UserEntity } from '../../user/entities/user.entity';
import { GraphQLErrorResponse } from '../../../utils/errors/graphQLErrorResponse';
import { SigninResponse } from '../dto/signup-response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly userResolver: UserResolver,
        private readonly jwtService: JwtService
    ) { }

    async signup(loginUserInput: UserInput): Promise<typeof createUserResult> {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(loginUserInput.password, salt)
        loginUserInput.password = hashedPassword
        return this.userResolver.createUser(loginUserInput)
    }

    async validateUser(email: string, password: string): Promise<UserEntity> {
        const user = await this.userService.findByEmail(email)
        if (user && (await bcrypt.compare(password, user.password))) return user
        throw GraphQLErrorResponse(
            "User authentication failed",
            'Unauthorized',
            401
        )
    }

    async signin(signinUserInput: UserEntity) {
        const { password, ...result } = signinUserInput
        const user = await this.userResolver.findByEmail(result.email)
        const access_token = await this.jwtService.sign({
            email: user.email,
            userId: user.id,
            permissions: user.permissions
        })
        return {
            access_token,
            user: result
        }
    }

}
