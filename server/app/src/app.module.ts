import { HttpException, Module, ValidationPipe } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { APP_PIPE } from '@nestjs/core';
import { join } from 'path';

import { UserModule } from './feuthers/user/module/user.module';
import { UserEntity } from './feuthers/user/entities/user.entity';
import { UserResolver } from './feuthers/user/resolver/user.resolver';
import { RedisOptions } from './configs/redis.options';
import { graphQLFormattedError } from './utils/errors/graphQLFormattedError.error';
import { AuthModule } from './feuthers/auth/auth.module';
import { AuthResolver } from './feuthers/auth/resolver/auth.resolver';

@Module({
  imports: [

    // .env Variables connection
    ConfigModule.forRoot({ isGlobal: true }),

    // Setup Redis connection
    CacheModule.registerAsync(RedisOptions),

    // Setup Mongoose connection
    MongooseModule.forRoot('mongodb+srv://MNS:rnY6JqbmAkoyoLs5@cluster0.j6cgxzc.mongodb.net/test'),

    // Setup Postgres connection
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [UserEntity],
      synchronize: true,
      logging: true,
    }),


    // Setup GraphQL connection
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      path: '/api',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      status400ForVariableCoercionErrors: true,
      formatError: graphQLFormattedError
    }),

    // Modules
    UserModule,
    AuthModule
  ],

  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    UserResolver, AuthResolver],
})
export class AppModule { }
