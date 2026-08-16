import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

console.log("DB FILE IS LOADED");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT)
});

console.log("Creating MySQL connection...");

db.connect((error) => {
    if (error) {
        console.log("Database connection failed:", error);
        return;
    }

    console.log("You are connected to MYSQL!");
});

export default db;