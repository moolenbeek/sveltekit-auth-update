// db/db.server.ts
import * as dotenv from "dotenv";
dotenv.config();
const { DATABASE_URL } = process.env;

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
const pool = new pg.Pool({
	connectionString: DATABASE_URL
});

await pool.connect();
const db = drizzle(pool);

export default db;
