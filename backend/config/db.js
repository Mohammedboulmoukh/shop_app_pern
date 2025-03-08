import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config();


// const {PGUSER, PGPASSWORD, PGHOST, PGDATABASE} = process.env;

//create a sql connection using our env variables
export const sql = neon(
     `postgresql://neondb_owner:npg_pjF9KfVaZQ2B@ep-rough-paper-a8j2mct9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require`
);
//this connection allows to us use sql queries

// #postgresql://neondb_owner:npg_pjF9KfVaZQ2B@ep-rough-paper-a8j2mct9-pooler.eastus2.azure.neon.tech/neondb?sslmode=require