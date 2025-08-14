const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Basic route
app.get('/', (req, res) => {
    let siteName = "My Site";
    let searchText = "Search here...";
    let arr = [" item1 ", 20 , 20 ,]
    res.render("index" , {siteName: siteName, searchText: searchText ,arr})
});


app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Adidas";
    let blogContent = "It is a long established fact that a reader will be distracted by the readable content of a page  ";
    res.render("blogpost" , {blogTitle: blogTitle, blogContent: blogContent })
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});