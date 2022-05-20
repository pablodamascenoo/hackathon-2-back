import Router from "express";
import authRouter from "./authRouter.js";
import subjectRouter from "./subjectRouter.js";

const router = Router();

router.use(authRouter);
router.use(subjectRouter);

export default router;
