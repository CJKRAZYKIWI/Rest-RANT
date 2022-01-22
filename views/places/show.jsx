const React = require('react')
const methodOverride = require ('method-override')
const Def = require('../default')

//this is designing the show page

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name }</h1>
          </main>
          <div>
            <a href={'/places/${data.id}/edit'} className="btn btn-warning"> 
  Edit
</a>
<form method="POST" action= {'/places/${data.id}?_method=DELETE'}>
  <button type= "submit" className="btn btn-danger">Delete</button>
</form>
 </div>
        </Def>
    )
}

module.exports = show