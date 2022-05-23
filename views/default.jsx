const React = require('react')


function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/> 
                <link rel="styleSheetLocal" href="public/css/style.css"/>

            </head>
            <body>
               <h1>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                </h1> 
            </body>
        </html>
    )
}

module.exports = Def
