import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export const {
    POSTGRES_USER,
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_PASSWORD,
    POSTGRES_PORT,
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    TOKEN_SECRET,
    ENV
} = process.env;

export const client = new Pool({
    user: POSTGRES_USER,
    host: POSTGRES_HOST,
    database: ENV === 'test' ? POSTGRES_TEST_DB : POSTGRES_DB,
    password: POSTGRES_PASSWORD,
    port: POSTGRES_PORT as unknown as number
});
