import { Router } from "express";
import { getSubjects } from "../controllers/subjectController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const subjectRouter = Router();

subjectRouter.get("/", verifyToken, getSubjects);

export default subjectRouter;
