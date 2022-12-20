const express = require("express");
const details = require("./details.model");

const app = express.Router();

app.get("/", async (req, res) => {
  try {
    const newdetails = await details.find({});
    if (newdetails) return res.send(newdetails);
    else {
      return res.send("Nothing is there yet");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});
app.post("/", async (req, res) => {
  try {
    let newdetails = await details.create(req.body);
    console.log(newdetails);
    return res.status(201).send(req.body);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let data = await details.findByIdAndRemove(id, { new: true });
    console.log(data);
    return res.send(data);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = app;
