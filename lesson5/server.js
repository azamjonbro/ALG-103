// express o'zgaruvchisiga kutubxonadan kelgan functionlarni tenglab oldim
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const router = require("./src/router")

app.use(express.json());
app.use("/api/books", router)

console.log(process.env.PORT);


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
   console.log("Mongodbga ulandi");
    app.listen(process.env.PORT, () => {
      console.log("server ishga tushdi http://localhost:" + process.env.PORT);
    });
  });
