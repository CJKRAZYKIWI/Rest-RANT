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
      </main>
    </Def>
    )
}

module.exports = show