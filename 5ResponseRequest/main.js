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


app.get("/index" ,(req, res) => {
  console.log("this is a index");
  res.sendFile("templates/index.html", {root: __dirname});
});

app.get("/api" , (req, res) => {
  res.json({a:1, b:2, c:3 ,d:4 , name:["kaif","harry"]})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
