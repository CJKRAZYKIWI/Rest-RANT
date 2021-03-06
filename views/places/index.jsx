const React = require ('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
          <div className="col-sm-6">
            <h2>
              <a href={`/places/${place.id}`} >
                {place.name}
              </a>
            </h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.Location}
            </p>
          </div>
        )
      })
    return(
    <Def>
        <main>
            <h1> What are we eating?</h1>
            {placesFormatted}
        </main>
    </Def>
    )
}

module.exports = index