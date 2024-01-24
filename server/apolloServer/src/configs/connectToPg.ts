import { PoolClient } from 'pg';
import pkg from 'pg';

import { validate } from '../utils/validate.js';
import { UserPermissionsEnum } from '../types/users.js';

const { Pool } = pkg;

const connect = {
    user: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
    host: process.env.PGHOST!,
    port: Number(process.env.PGPORT!),
    database: process.env.PGDATABASE,
}
const pool = new Pool(connect);

export const connectToPg = async () => {
    try {

        const client: PoolClient = await pool.connect();
        console.log('Connected to postgres');
        await defaultAdminUsers(client);
    } catch (err) {
        console.error('Error connecting to DB', err);
    } finally {
        pool.end();
    }
};

async function defaultAdminUsers(client: PoolClient) {
    const hashedPassword = await validate.hashPassword('string');
    const user =
    {
        first_name: 'chaim natan',
        last_name: 'barlev',
        email: 'barlev8114@gmail.com',
        password: hashedPassword,
        permissions: UserPermissionsEnum.director,
    }

    await client.query(
        `INSERT INTO users (first_name, last_name, email, password, permissions)
             VALUES ($1, $2, $3, $4, $5)`,
        [
            user.first_name,
            user.last_name,
            user.email,
            user.password,
            user.permissions,
        ]
    );

    console.log('Admin user added successfully');
}

export default pool;