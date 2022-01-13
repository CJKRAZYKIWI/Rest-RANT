require('dotenv').config()
// Require needed modules.
const express = require('express')

// Initialize the app object.
const app = express()

app.use('/places', require('./controllers/places'))
// Create a homepage route.
app.get('/', function (req, res) {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Hello world')
})

app.get('*', (req,res)=> {
    res.status(404).send('<h1>404 page,this page does not exist<h1>')

})

app.listen(process.env.PORT)