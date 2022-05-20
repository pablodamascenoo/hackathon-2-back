import Router from "express";
import subjectRouter from "./subjectRouter";
import authRouter from "./authRouter.js";

const router = Router();

router.use(authRouter);
router.use(subjectRouter);

export default router;
