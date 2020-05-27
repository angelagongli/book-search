const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const server = require("http").createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3001;

io.on("connection", (socket) => {
  socket.on("save book", (title) => {
    io.emit("save book", title);
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

server.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
