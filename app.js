import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import usersRoutes from "./routes/usersRoute.js";
const app = express();

// connect to db using mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DB CONNECTED`);
  })
  .catch((err) => console.log(err));

// middlewares

app.use(bodyParser.json());
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
