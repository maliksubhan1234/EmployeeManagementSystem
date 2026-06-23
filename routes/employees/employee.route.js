import express from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../../controllers/employee.controller.js";
const router = express.Router();

router.get("/get-employee/:id", getEmployee);
router.post("/create-employee", createEmployee);
router.delete("/delete-employee/:id", deleteEmployee);
router.put("/update-employee/:id", updateEmployee);

export default router;
