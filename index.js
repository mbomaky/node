import dotenv from "dotenv";
dotenv.config({ quiet: true });
import express from "express";
import cors from "cors";

import userRouter from "./routes/user.route.js";

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", userRouter);

const runApp = async () => {
  try {
    app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  } catch (e) {
    console.error(e);
  }
};
runApp();
