import express from "express";
import { Employee } from "../models/employeeSchema.js";

export const getEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const checkEmployee = await Employee.findById(id);
    if (!checkEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "Employee Found Successfully",
      data: checkEmployee,
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
  }
};

// Employee Creation

export const createEmployee = async (req, res) => {
  try {
    const { name, email, salary, department, isActive } = req.body;
    const checkEmployee = await Employee.findOne({ email });
    if (checkEmployee) {
      return res
        .status(400)
        .json({ success: false, message: "Employee Already Exsist" });
    }
    const newEmployee = await Employee.create({
      name: name,
      email: email,
      department: department,
      salary: salary,
      isActive: isActive,
    });
    return res.status(201).json({
      success: true,
      message: "Employee Created Successfully",
      data: newEmployee,
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
  }
};

// Employee Updation

export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, salary, department, isActive } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { name, salary, department, isActive },
      { new: true },
    );
    if (!updateEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "Employee Updated Successfully",
      data: updatedEmployee,
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
  }
};

// Employee Deletion

export const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const checkEmployee = await Employee.findByIdAndDelete(id);
    if (!checkEmployee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee Not Found" });
    }
    return res.status(200).json({
      success: true,
      message: "Employee Deleted Successfully",
      data: checkEmployee,
    });
  } catch (err) {
    return res
      .status(500)
      .json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
  }
};
