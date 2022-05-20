import { Router } from "express";
import { postRegister } from ".././controllers/authController.js"
import { validateRegister } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-up', validateRegister, postRegister);

export default authRouter;