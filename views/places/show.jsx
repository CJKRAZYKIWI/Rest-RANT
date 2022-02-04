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
    let rating = (
        <h3 className="inactive">
          Not yet rated!
        </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐️'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
    comments = data.place.comments.map (c => {
      return (
        <div className= "border">
          <h2 className= "rant"> </h2>
          <h4>{c.content}</h4>
          <h3>
            <strong> - {c.author} </strong>
          </h3>
          <h4> rating: {c.stars} </h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
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
            <h2> Rating</h2> {rating}
            <h2> Comments </h2>{comments}
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <br />
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                  Edit
                </a>{` `}
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
        </div>
        </div>
        <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
            <div id="map"></div>
            



      </main>

    </Def>
    )
}

module.exports = show