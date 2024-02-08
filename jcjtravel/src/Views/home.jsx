const React = require('react')

function Def (html) {
    return (
        <html>
            <title>Rest-Rant</title>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" /> */}
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
        
    )
}

module.exports = Def