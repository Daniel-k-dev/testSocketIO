const express = require("express");

// mongoose
const main = require("./mongooseMain");

// socket
const socketMain = require("./socket");

// multer
const upload = require("./multerMain");

require("dotenv").config();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main.main();
main().catch((err) => console.log(err));
// socket
socketMain();

app
  .get("/", function (req, res, next) {
    res.send({ message: "done" });
  })
  .post("/", upload.single("file"), function (req, res, next) {
    res.send({ message: "done" });
  });
app.get("test", (req, res) => {});

app.listen(port, () => {
  // console.log(a)
  console.log(`Example app listening on port ${port}`);
});
