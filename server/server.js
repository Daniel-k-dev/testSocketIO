const express = require("express");

// socket
const socketMain = require("./socket");

// multer
const upload = require("./multerMain");

require("dotenv").config();
const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// socket
socketMain();

app.get("/", function (req, res, next) {
    res.send(`<h1>성공</h1>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
