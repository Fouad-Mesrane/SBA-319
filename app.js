import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";

const app = express();


// connect to db using mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DB CONNECTED`);
  })
  .catch((err) => console.log(err));


  app.listen(process.env.PORT, () =>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
  })