import mongoose from "mongoose";

// Creating the Schema of Employee
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  department: { type: String, required: true },
  salary: { type: Number, required: true },
  isActive: { type: Boolean, required: true },
});

export const Employee = new mongoose.model("Employee", employeeSchema);
