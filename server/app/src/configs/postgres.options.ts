import { TypeOrmModule } from "@nestjs/typeorm"
import { UserEntity } from "src/feuthers/user/entities/user.entity"

export const postgresOptions = TypeOrmModule.forRoot({
    type: process.env.DB_TYPE as any,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: [UserEntity],
    synchronize: true,
    logging: true,
})
