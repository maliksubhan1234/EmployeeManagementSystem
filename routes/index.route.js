import express from "express";
import EmployeeRoutes from "./employees/employee.route.js";
const router = express.Router();

router.use("/employee", EmployeeRoutes);

export default router;
