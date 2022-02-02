const React = require('react')
const Def = require('../default')

//CSSstyle this when blueprint is done
function new_form (data) {
    let message = 'error'
    if (data.message) {
        message = (
            <h4 className= "alert-danger">
                {data.message}
            </h4>
        )
    }

    return (
        <Def>
            <main>
                <h1> Add a New Place </h1>
                {message}
                <form method = "POST" action= "/places">
                    <div className = "form-group">
                        <label htmlFor="name"> Place Name </label>
                        <input id="name" name ="name" required />
                        <label htmlFor="pic"> Place Pic </label>
                         <input type="url" id="pic" name ="pic" />
                        
                        <label htmlFor="Location"> City,State </label>
                       <input id="Location" name ="Location" required />
                       
                        <label htmlFor="cuisines"> Type of cuisine </label>
                         <input id="cuisines" name ="cuisines" required  />

                         <label htmlFor="founded"> Founded Year</label>
                         <input className ="form-control" id= "founded" name="founded" />
                        
                    </div>
                    <input className = "btn btn-primaty" type = "submit" value= "Add Place" />

                </form>
            </main>
        </Def>
    )

}
module.exports = new_form