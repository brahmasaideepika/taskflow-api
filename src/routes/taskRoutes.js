import { Router } from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = Router();

// Get all tasks
router.get("/", getTasks);

// Get task by ID
router.get("/:id", getTaskById);

// Create a new task
router.post("/", createTask);

// Update a task
router.put("/:id", updateTask);

// Delete a task
router.delete("/:id", deleteTask);

export default router;