const express = require("express")
const path = require("path")
const app = express()
app.listen(3000)
const fs = require("fs")
//Serving static files
app.use('/static', express.static('static'))
//To take html form value in backend
app.use(express.urlencoded())

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

app.post('/', (req, res) => {
  let first_name = req.body.first_name
  let last_name = req.body.last_name
  let gender = req.body.gender
  let address = req.body.address
  let more = req.body.more

  // create a new file and write in that file 
  let outputFile = `The name of user is ${first_name}, ${last_name}, who is a ${gender} ,
  whose address is ${address} ,and this is ${more} about ${first_name}`
  fs.writeFileSync('output.txt', outputFile)
  res.status(200).render('form')
})