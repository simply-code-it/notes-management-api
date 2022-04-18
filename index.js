const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

dotEnv.config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/posts", require("./routes/post"));
app.listen(process.env.PORT, () => console.log("server is running..."));

// // const http = require("http");
// // http
// //   .createServer((req, res) => {
// //     res.end("<h1>its working...</h1>");
// //   })
// //   .listen(3001, "localhost", () => {
// //     console.log("listening on the port 3001...");
// //   });

// //express
// //install npm i express

// const app = require("express")();
// app.listen(3001, () => {
//   console.log("listening on the port 3001...");
// });
// app.get("/", (req, res) => {
//   res.end("<h1>yes you are almost there...</h1>");
// });

// //require routes from getRoute file

// const routes = require("./routes/getRoute");

// app.use("/routes", routes);
