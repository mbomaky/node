require("dotenv").config({ quiet: true });
const express = require("express");
const cors = require("cors");
const router = require("./Router");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);

const runApp = () => {
  try {
    await mongoose.connect('');
    app.listen(port, () => {
      console.log("Listening on port " + port);
    });
  } catch (e) {
    console.error(e);
  }
};
runApp();
