import { Router } from "express";
import { taskRouter } from "../routes/tasks.routes.js";
export const globalRouter = Router();

globalRouter.use("/tasks", taskRouter);
