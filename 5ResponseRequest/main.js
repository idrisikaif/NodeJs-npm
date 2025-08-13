const express = require("express");
const blog = require('./routes/blog')

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use('./blog',blog)

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

app.listen(port, () => {const express = require('express')
const blog = require('./routes/blog')
 


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)


app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
  console.log(`Example app listening on port ${port}`);
});



