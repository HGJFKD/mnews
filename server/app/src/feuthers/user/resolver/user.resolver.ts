import { UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ID, Context } from '@nestjs/graphql';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { ApolloServerErrorCode } from '@apollo/server/errors';
import { UserService } from '../service/user.service';
import { UserInput } from '../dto/user.input';
import { UserEntity } from '../entities/user.entity';
import { GraphQlInterceptor } from '../helpers/interceptors/graphQL.interceptor';
import { GraphQlCecheKey } from '../helpers/decolators/graphQLCecheKey.decorator';
import { createUserResult } from '../dto/createUserResult.dto';
import { GraphQLErrorResponse } from '../../../utils/errors/graphQLErrorResponse';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  //------------------------ Queries --------------------------//
  // Find all
  @Query(() => [UserEntity])
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  async findAll(): Promise<UserEntity[]> {
    try {
      const res = await this.userService.findAll();
      return res
    } catch (error) {
      return error.message;
    }
  }


  @Query(() => UserEntity)
  @UseInterceptors(GraphQlInterceptor)
  @GraphQlCecheKey('userId')
  async findById(@Args('id') id: number): Promise<UserEntity> {
    const user = await this.userService.findById(id);
    if (!user)
      throw GraphQLErrorResponse(
        "User does not exist!",
        ApolloServerErrorCode.BAD_REQUEST,
        403
      )
    return user;
  }

  @Query(() => UserEntity)
  @UseInterceptors(GraphQlInterceptor)
  @GraphQlCecheKey('userEmail')
  async findByEmail(@Args('email') email: string): Promise<UserEntity> {

    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw GraphQLErrorResponse(
        "User does not exist!",
        ApolloServerErrorCode.BAD_REQUEST,
        403
      )
    } else {
      return user;
    }

  }

  @Mutation(returns => createUserResult)
  @UsePipes(new ValidationPipe())
  async createUser(@Args('user') user: UserInput): Promise<typeof createUserResult> {
    const isExists = await this.userService.findByEmail(user.email);
    if (isExists) throw GraphQLErrorResponse(
      "User already exists!",
      ApolloServerErrorCode.BAD_USER_INPUT,
      504
    )
      return this.userService.createUser(user);
  }

  @Mutation(() => UserEntity)
  async update(@Args('updateUserInput') updateUserInput: UserInput): Promise<UserEntity> {
    try {
      const user = await this.userService.findByEmail(updateUserInput.email);
      if (!user) throw GraphQLErrorResponse(
        "User does not exist!",
        ApolloServerErrorCode.BAD_REQUEST,
        403
      )
      return this.userService.update(updateUserInput);
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => String)
  async delete(@Args('id') id: number): Promise<string> {
    try {
      const user = await this.userService.findById(id);
      if (!user) throw GraphQLErrorResponse(
        "User does not exist!",
        ApolloServerErrorCode.BAD_REQUEST,
        403
      )
      return this.userService.delete(id);
    } catch (error) {
      return error.message;
    }
  }

  @Mutation(() => String)
  async deleteAll(): Promise<string> {
    try {
      return this.userService.deleteAll();
    } catch (error) {
      return error.message;
    }
  }
}
