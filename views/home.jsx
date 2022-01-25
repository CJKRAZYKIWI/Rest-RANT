const React = require ('react')
const Def = require( './default')

function home () {
    return (
        <html> 
            <head>
                <meta name ="viewport" content= "width=device-width, initial-scale = 1.0"></meta>
                <title> Home Page</title>
                <link rel = "stylesheet" href= "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel = "stylesheet" href = "/css/home.css" />
            </head>
            <body>
              <div className ="outer-wrapper"></div>
                <div className ="wrapper"></div>
                    <div className = "one"></div>
                    <div className = "two"></div>
                    <div className = "three"></div>
            </body>
        </html>

    )}
module.exports = home