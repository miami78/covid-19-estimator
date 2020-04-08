import { Response, Request, Router } from "express";
import prompt from "../utils/apiResponses";

const covidRouter = Router();
covidRouter.post("/on-covid-19", (req: Request, res: Response) => {
  prompt.successMessage(res, 200, "Covid!!!!!!!!!Ruuuun!");
});

export { covidRouter };
