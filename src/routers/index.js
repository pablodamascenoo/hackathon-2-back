import Router from "express";
import subjectRouter from "./subjectRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(subjectRouter);
router.use(authRouter);

export default router;
