const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
          <form method = "POST" action= {`/places/${data.id}?_method=PUT`}>
                    <div className = "form-group">
                        <label htmlFor="name"> Place Name </label>
                        <input id="name" name ="name" value={data.place.name} required />
                        <label htmlFor="pic"> Place Pic </label>
                         <input type="url" id="pic" name ="pic"  value={data.place.pic} />
                        
                        <label htmlFor="Location"> City,State </label>
                       <input id="Location" name ="Location"  value={data.place.Location} required />
                       
                        <label htmlFor="cuisines"> Type of cuisine </label>
                         <input id="cuisines" name ="cuisines"  value={data.place.cuisines} required  />
                        
                    </div>
                    <input className = "btn btn-primaty" type = "submit" value= "Add Place" />

                </form>
        </Def>
    )
}

module.exports = edit_form