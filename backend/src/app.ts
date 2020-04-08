import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { homeRouter } from "./routes/index";
import { covidRouter } from "./routes/covidRouter";
import { BASE_URL } from "./utils/constants";
class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();

  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(BASE_URL, homeRouter);
    this.app.use(BASE_URL, covidRouter);
    this.app.use(cors());
  }
}

export default new App().app;
