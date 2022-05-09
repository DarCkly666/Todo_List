import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const database: string = process.env.DATABASE || "";
const username: string = process.env.USERNAME || "";
const password: string = process.env.PASSWORD || "";
const host = process.env.HOST;

const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: "mysql",
  logging: false,
});

export default connection;
