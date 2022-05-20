import { Router } from "express";
import { getQuestions } from "../controllers/questionsController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const questionsRouter = Router();

questionsRouter.get("/question/:id", verifyToken, getQuestions);

export default questionsRouter;