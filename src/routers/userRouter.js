import { Router } from "express";
import { getUser } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const userRouter = Router();

userRouter.get("/user", verifyToken, getUser);

export default userRouter;
