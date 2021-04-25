import express from "express";
import mongoose from "mongoose";
import episodes from "./routes/episodes";
import dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI ?? "", { useNewUrlParser: true })
  .then(() => {
    const app = express();
    app.use("/api", episodes);
    console.log("Connected to database!");
    const port = process.env.PORT || 3333;

    app.listen(port, () => console.log(`App listening on PORT ${port}`));
  })
  .catch(() => console.log(process.env.MONGO_URI));
