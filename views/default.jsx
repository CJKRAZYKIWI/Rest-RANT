const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title> Title of the page</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def