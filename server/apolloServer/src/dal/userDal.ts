import pkg from 'pg';

import { User } from "../types/users.js";
import RequestError from "../utils/RequestError.js";
import STATUS_CODES from "../utils/StatusCodes.js";

const { Pool } = pkg;

export const sendQueryToDatabase = async (query: string, values?: any[]): Promise<any> => {
    const pool = new Pool({});
    const res = await pool.connect();
    try {
        const data = await res.query(query, values);
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    } finally {
        res.release();
    }
}



const addUser = async (user: User) => {

    const values = [
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.permissions
    ];

    const query = `INSERT INTO users (first_name, last_name, email, password, permissions)
            VALUES ($1, $2, $3, $4, $5)
        `;
    const res = await sendQueryToDatabase(query, values);

    if (!res) {
        throw new RequestError("Error while adding user:", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
};

// login
const getUserByEmail = async (email: string) => {

    const query = `SELECT * FROM users WHERE email = $1`;
    const result = await sendQueryToDatabase(query, [email]);
    if (!result) {
        throw new RequestError("Error while getting user by email:", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
    return result.rows;
};

const deleteUser = async (id: string) => {
    const deleteQuery = 'SELECT * FROM users WHERE user_id = $1 RETURNE *';
    const deletedUser = await sendQueryToDatabase(deleteQuery, [id]);
    if (deletedUser.rows.length === 0) {
        throw new RequestError("User not found", STATUS_CODES.NOT_FOUND);
    }
    return `User with ID ${id} deleted successfully.`;
};

const getAllDal = async () => {
    const query = `SELECT * FROM users`
    const result = await sendQueryToDatabase(query)
    if (!result) {
        throw new RequestError("Error while getting users:", STATUS_CODES.INTERNAL_SERVER_ERROR);
    }
    return result.rows;
}


export const userDal = {
    addUser,
    getUserByEmail,
    deleteUser,
    getAllDal
};