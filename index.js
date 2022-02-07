require('dotenv').config()
require('dotenv').config()
// Require needed modules.
const express = require('express')
const methodOverride = require ('method-override')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}, 
() => {console.log('connected to mongo: ',process.env.MONGO_URI)})

// Initialize the app object.
const app = express()


app.set('view engine', 'jsx')
app.engine( 'jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/places', require('./controllers/places'))


// Create a homepage route.
app.get('/', (req, res) => {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.render('home')
})
//wildcard route
app.get('*', (req,res)=> {
    res.render('error404')
})

app.listen(process.env.PORT)