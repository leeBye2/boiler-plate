//express 서버 설정

const express = require("express");
const app = express();
const port = 5000;
app.listen(port, () => {
  console.log(`Running on port : ${port}`);
});

app.get("/", (req, res) => {
  res.send("i can do it !!");
});

//body-parser 설정
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//User 모델 import
const { User } = require("./models/User");

//몽고 db 연결
const config = require("./config/key");
const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log("MongoDB Connected ...");
  })
  .catch((e) => console.log(e));

// 프론트에서 데이터를 받아오고 저장
app.post("/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false });
    return res.status(200).json({ success: true });
  });
});
