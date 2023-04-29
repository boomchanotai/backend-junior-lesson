const express = require("express");
const authRouter = require("./routes/authRouter");

const app = express();

app.use("/auth", authRouter);

// Read
app.get("/", (req, res) => {
  res.send("get Hello World");
});

// Create
app.post("/", (req, res) => {
  res.send("post Hello World");
});

// Update
app.patch("/", (req, res) => {
  res.send("patch Hello World");
});

// Update
app.put("/", (req, res) => {
  res.send("put Hello World");
});

// Delete
app.delete("/", (req, res) => {
  res.send("delete Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
