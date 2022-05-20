import Router from "express";
import authRouter from "./authRouter.js";
import subjectRouter from "./subjectRouter.js";
import userRouter from "./userRouter.js";
import questionRouter from "./questionRouter.js";

const router = Router();

router.use(authRouter);
router.use(subjectRouter);
router.use(userRouter);
router.use(questionRouter);

export default router;
