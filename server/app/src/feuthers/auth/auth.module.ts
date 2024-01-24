import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './service/auth.service';
import { UserEntity } from '../user/entities/user.entity';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UserModule } from '../user/module/user.module';
import { AuthResolver } from './resolver/auth.resolver';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    ConfigModule,
    PassportModule,
    UserModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        signinOrtions: { expriesIn: '10h' },
        secret: process.env.JWT_SECRET,

      }),
    })
  ],
  providers: [
    AuthService,
    AuthResolver,
    LocalStrategy,
    JwtStrategy
  ], 
  exports: [AuthService]

})
export class AuthModule { }
