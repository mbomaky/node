import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import PostModel from "./Post.js";

dotenv.config({ quiet: true });
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { author, title, text, image } = req.body;
    const post = await PostModel.create({ author, title, text, image });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
