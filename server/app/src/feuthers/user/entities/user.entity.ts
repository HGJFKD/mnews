import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserPermissions } from '../types/user.type'
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Field()
    @Column({ type: 'varchar', length: 30 })
    firstName: string


    @Field()
    @Column({ type: 'varchar', length: 30 })
    lastName: string

    @Field()
    @Column({ type: 'varchar', length: 200 })
    email: string;

    @Field()
    @Column({ type: 'varchar', unique: true })
    password: string;

    @Field()
    @Column({ type: 'enum', enum: UserPermissions })
    permissions: string;

}
