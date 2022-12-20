const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var randomWords = require("random-words");
// const bookmarkRouter = require("./bookmark/bookmark.route");
const detailsRouter = require("./details/details.route");
const connect = require("./Config/config");
require("dotenv").config();
const app = express();
app.use(cors());
app.get("/randomword", (req, res) => {
  res.send(randomWords());
});
app.use(express.json());
let PORT = process.env.PORT || 8080;
mongoose.set("strictQuery", true);
app.use("/details", detailsRouter);
// app.use("/bookmark", bookmarkRouter);

app.listen(PORT, async () => {
  await connect();
  console.log("User heat the server!!");
});
