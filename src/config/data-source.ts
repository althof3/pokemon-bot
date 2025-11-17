import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../db/entity/User";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: ["src/db/migrations/**/*.ts"], // lokasi file migration
  synchronize: false, // wajib false kalau pakai migration
});