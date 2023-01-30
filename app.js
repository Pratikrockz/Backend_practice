const express = require("express")
const path = require("path")
const app = express()
app.listen(3000)
//Serving static files
app.use('/static', express.static('static'))

// use template engine as pug
app.set('view engine', 'pug')

//set the template dir
app.set('views', path.join(__dirname, 'views'))

//PUG demo endpoint
app.get('/demo', (req, res) => {
  res.status(200).render('demo', { title: 'PUG', message: 'Hello there! I am using pug as template engine' })
})
app.get('/form', (req, res) => {
  res.status(200).render('form')
});


app.get('/', (req, res) => {
  res.status(200).send("this is home page of express web")
})

app.get('/about', (req, res) => {
  res.status(200).send("this is about of home page of express web")
})

app.get('/error', (req, res) => {
  res.status(404).send("The page is not found")
})