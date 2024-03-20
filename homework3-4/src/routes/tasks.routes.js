import { Router } from "express";
import { TaskContoller } from "../controllers/tasks.controller.js";

export const taskRouter = Router();

taskRouter.get("/", TaskContoller.getAllTasks);
taskRouter.get("/:id", TaskContoller.getTaskById);
taskRouter.post("/", TaskContoller.createTask);
taskRouter.post("/:id", TaskContoller.updateTask);
taskRouter.delete("/:id", TaskContoller.deleteTask);
taskRouter.delete("/", TaskContoller.deleteAllTasks);
