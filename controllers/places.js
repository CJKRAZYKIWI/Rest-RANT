const router = require('express').Router()
const places = require('../models/places.js')

router.get('/',(req,res)=> {
   
    res.render('places/index', {places})
})

router.get('/new',(req,res)=> {
    res.render('places/new')
})

//EDIT 
router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
      res.render('places/edit', { place: places[id], id })
    }
  })

// POST ROUTE FOR THOSE WHO DONT HAVE A PIC
router.post('/', (req, res) => {
    console.log(req.body)
    if ( !req.body.pic) {
        //default image if one isn't provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    places.push(req.body)
    res.redirect('/places');
  })

  //update
  router.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if(isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        //make sure info is valid from req.body
        if ( !req.body.pic) {
            //default image if one isn't provided
            req.body.pic = '\\images\\storeDefault.jpg'
        }
        places[id] = req.body
        res.redirect(`/places/${id}`,)
    }
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

//delete
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
        res.send('/places')
    }
})

module.exports = router