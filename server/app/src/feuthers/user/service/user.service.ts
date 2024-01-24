import { Inject, Injectable, UseInterceptors } from '@nestjs/common';
import { CACHE_MANAGER, Cache, CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserInput } from '../dto/user.input';
import { UserEntity } from '../entities/user.entity';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }

  @UseInterceptors(CacheInterceptor)
  @CacheKey('users')
  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async findById(id: number): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { email } });
  }

  async createUser(user: UserInput) {
    const createdUser = this.userRepository.create(user)
    await this.cacheManager.reset();
    return await this.userRepository.save(createdUser);
  }

  async update(user: UserInput): Promise<UserEntity> {
    const { id } = user
    await this.cacheManager.reset();
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<string> {
    await this.cacheManager.reset();
    await this.userRepository.delete(id)
    return `User with ID: ${id}, Was seccfully deleted`

  }

  async deleteAll(): Promise<string> {
    await this.cacheManager.reset();
    await this.userRepository.clear()
    return `All users was seccfully deleted`

  }
}