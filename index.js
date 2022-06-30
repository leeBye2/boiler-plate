const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Running on port : ${port}`);
});

app.get("/", (req, res) => {
  res.send("i can do it");
});

//몽고 db 연결
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://candoit:cksdud02@cluster.wk7ccjb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB Connected ...");
  })
  .catch((e) => console.log(e));
