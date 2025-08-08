const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) 
//app.get, app.post, app.put, app.delete (path, handler) 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This is the about page!')
})

app.get('/contact', (req, res) => {
  res.send('this is the contact page!')
})

app.get('/blog', (req, res) => {
  res.send('this is the blog page!')
})

app.get('/blog/:slug', (req, res) => {
  //logic to get the blog post from a database or file would go here
  res.send(`this is the blog post for ${req.params.slug}`)
})

// app.get('/blog/into-to-js', (req, res) => {
//   //logic to get the blog post from a database or file would go here
//   res.send('this is the intro to js blog post!')
// })

// app.get('/blog/into-to-python', (req, res) => {
//   //logic to get the blog post from a database or file would go here
//   res.send('this is the intro to python blog post!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
