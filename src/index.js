import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { success } from "./misc/consoleMessages.js";
import router from "./routers/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, success(` Servidor rodando na porta ${port}`));
