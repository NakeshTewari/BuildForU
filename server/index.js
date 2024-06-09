const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {});
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
  }
}
connect();

app.listen(process.env.PORT, () => {
  console.log(`server start at port no: ${process.env.PORT}`);
});
