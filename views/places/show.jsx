const React = require('react')
const methodOverride = require ('method-override')
const Def = require('../default')

//this is designing the show page

function show (data) {
  let comments = (
    <h3 className= "inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map (c => {
      return (
        <div className= "border">
          <h2 className= "rant"> </h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author} </strong>
          </h3>
          <h4> rating: {c.stars} </h4>
        </div>
      )
    })
  }
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
      
            <h2>
              Description
            </h2>
            <h2> Comments </h2>{comments}
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
           
        </div>
        </div>
      </main>
    </Def>
    )
}

module.exports = show