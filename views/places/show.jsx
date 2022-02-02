const React = require('react')
const methodOverride = require ('method-override')
const Def = require('../default')

//this is designing the show page

function show (data) {
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.Location}
            </h3>
          </div>
          <div className="col-sm-6">
            ...
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            ...
        </div>
        </div>
      </main>
    </Def>
    )
}

module.exports = show