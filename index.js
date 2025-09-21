import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import router from "./Router.js";

dotenv.config({ quiet: true });
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", router);
app.use(fileUpload({}));

const startApp = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(port, () =>
      console.log(`==> App is listening on port ${port} 🚀`),
    );
  } catch (error) {
    console.log(error);
  }
};

await startApp();
