import Router from "express";
import authRouter from "./authRouter.js";
import subjectRouter from "./subjectRouter.js";
import questionRouter from "./questionRouter.js"

const router = Router();

router.use(authRouter);
router.use(subjectRouter);
router.use(questionRouter);

export default router;
