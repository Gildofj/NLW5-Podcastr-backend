import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import episodes from "./routes/episodes";

dotenv.config();

// Connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI ?? "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
    const app = express();
    app.use("/api", episodes);
    app.use(cors);
    app.use(express.json());

    const port = process.env.PORT || 3333;
    app.listen(port, () => console.log(`App listening on PORT ${port}`));
  })
  .catch(() => console.error.bind("Error connect to database"));
