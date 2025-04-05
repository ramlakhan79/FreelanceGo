const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose
  .connect(DB || "mongodb://localhost:27017/freelance")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("Connection Unsuccessful :(", err));
