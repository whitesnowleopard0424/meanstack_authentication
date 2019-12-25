const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// server client files
app.use(express.static(__dirname + "/dist"))

app.get('/', (req, res)=>{
   res.sendFile('./dist/index.html')
})

app.get('*', (req, res) => {
  res.redirect('/')
})

//routes
app.use('/auth', require('./server/controllers/users.controller'))



// start server
const port = process.env.PORT || 8080
const server = app.listen(port, function () {
    console.log(`Server listening on port ${port}`)
})














