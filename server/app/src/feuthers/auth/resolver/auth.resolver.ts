import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '../service/auth.service';
import { createUserResult } from '../../user/dto/createUserResult.dto';
import { UserInput } from '../../user/dto/user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guard/gql-auth.guard';
import { SigninUserInput } from '../dto/signin-user.input';
import { SigninResponse } from '../dto/signup-response.dto';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) { }

    @Mutation(returns => createUserResult)
    async signup(
        @Args('loginUserInput') loginUserInput: UserInput)
        : Promise<typeof createUserResult> {
        return this.authService.signup(loginUserInput)
    }

    @Mutation(() => SigninResponse)
    @UseGuards(GqlAuthGuard)
    async signin(
        @Args('loginUserInput') loginUserInput: SigninUserInput,
        @Context() context
    ) {
        return this.authService.signin(context.user)
    }
}
