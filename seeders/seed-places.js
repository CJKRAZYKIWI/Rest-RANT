const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    Location: 'Seattle,Washington',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    Location: 'Phoenix,Arizona',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg',
    founded: 2020
}])

.then(() => {console.log('Successful BOIIIII')
process.exit ()
})
.catch(err=> { console.log ('eeeeek it failed!',err)
process.exit ()
})