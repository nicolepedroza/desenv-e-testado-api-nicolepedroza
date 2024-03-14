import "dotenv/config"
import helmet from "helmet";
import express, { json } from "express";
import { carRouter } from "./routes/car.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carRouter)