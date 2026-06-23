import env from "dotenv";
env.config();
const PORT = process.env.PORT;
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.route.js";
import { connectDb } from "./config/db.js";

const app = express();
app.use(express.json());
app.use("/api/v0", routes);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
