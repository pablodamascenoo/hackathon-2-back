import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import { success } from "./misc/consoleMessages.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port, success(` Servidor rodando na porta ${port}`));
