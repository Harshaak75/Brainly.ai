import dotenv from 'dotenv'

const env = dotenv.config();

export const db_connection_string = process.env.DATABASE_URL;

export const port = process.env.PORT;

export const secret_key = process.env.SECRET_KEY;