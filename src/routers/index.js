import Router from "express";
import subjectRouter from "./subjectRouter";

const router = Router();

router.use(subjectRouter);

export default router;
