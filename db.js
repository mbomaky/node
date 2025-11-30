import { Pool } from "pg";

const dbPool = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "qw",
  database: process.env.DB_NAME || "my_test_db",
});

export { dbPool };
