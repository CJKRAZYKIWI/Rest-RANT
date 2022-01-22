const router = require('express').Router()
const places = require('../models/places.js')

router.get('/new',(req,res)=> {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if ( !req.body.pic) {
        //default image if one isn't provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    places.push(req.body)
    res.redirect('/places');
  })

router.get('/',(req,res)=> {
   
    res.render('places/index', {places})
})

//show route
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if(!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id })
    }
    
})

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

module.exports = router