import "dotenv/config"
import helmet from "helmet";
import express, { json } from "express";
import { carRouter } from "./routes/car.routes";
import { handleErrors } from "./middleware/handleError.middleware";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carRouter)
app.use(handleErrors)