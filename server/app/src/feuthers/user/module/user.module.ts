import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from '../service/user.service';
import { UserEntity } from '../entities/user.entity';
import { UserSubscriber } from '../subscriber/user.subscriber';
import { UserResolver } from '../resolver/user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserResolver,
    UserService,
    UserSubscriber
  ],
  exports: [UserService, UserResolver]
})
export class UserModule { }
