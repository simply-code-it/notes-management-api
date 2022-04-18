const router = require("express").Router();

const dbURI =
  "mongodb+srv://netninja:test1234@example.i77d9.mongodb.net/Example?retryWrites=true&w=majority";

router.get("/ping", (req, res) => {
  //   res.send("<h1>Server is up and running...</h1>");
  res.send({
    response: "pong",
  });
});

module.exports = router;
