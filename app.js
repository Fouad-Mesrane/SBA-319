import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import usersRoutes from "./routes/usersRoute.js";
import postsRoutes from "./routes/postsRoute.js";
import commentsRoutes from "./routes/commentsRoute.js";
import errorHandler from "./middleware/errorHandler.js";
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

// routes
app.use("/api", usersRoutes);
app.use("/api", postsRoutes);
app.use("/api", commentsRoutes);


// error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
