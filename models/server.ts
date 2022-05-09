import express, { Application, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import connection from "../db/connection";
import associations from "../db/associations";
import router from "../routes/index.routes";

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

    //Middlewares
    this.middlewares();
  }

  async dbConnetion() {
    await connection.authenticate();
    //await connection.sync({ force: true });
    console.log("Database connected");
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(urlencoded({ extended: true }));
    this.app.use(router);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
