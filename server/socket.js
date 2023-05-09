const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

require("dotenv").config();

const socketMain = () => {

  console.log(process.env.CHAT_PORT)
  io.listen(process.env.CHAT_PORT);

  io.on("connection", (socket) => {
    socket.emit("msg" , "join_checked")
    console.log("a user connected");
    socket.on("join", (msg) => {
      socket.join('test')
      console.log(msg)
      socket.emit("msg", "joined")
    })
    socket.on("msg", (msg) => {
      socket.to('test').emit("msg", msg)
    });
  });
};

module.exports = socketMain
