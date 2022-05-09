import express, { Application } from "express";
import dotenv from "dotenv";
import connection from "../db/connection";
import associations from "../db/associations";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    dotenv.config();
    this.app = express();
    this.port = process.env.PORT || "3000";

    //DB Connection
    this.dbConnetion();
    associations();
  }

  async dbConnetion() {
    await connection.authenticate();
    await connection.sync({ alter: true });
    console.log("Database connected");
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
