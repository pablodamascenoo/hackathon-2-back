import { Router } from "express";
import { postRegister, postLogin } from ".././controllers/authController.js"
import { validateRegister, loginSchema } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-up', validateRegister, postRegister);
authRouter.post('/sign-in', loginSchema, postLogin);

export default authRouter;