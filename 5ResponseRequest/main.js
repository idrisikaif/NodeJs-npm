const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
  console.log("this is a GET request");
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  console.log("this is a POST request");
  res.send("Hello World Post!");
});

app.put("/", (req, res) => {
  console.log("this is a PUT request");
  res.send("Hello World PUT!");
});
app.delete("/", (req, res) => {
  console.log("this is a delete request");
  res.send("Hello World delete!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
