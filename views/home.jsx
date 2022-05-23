const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <head>
                <title>Title </title>
            </head>
            <main>
                <h1>REST-Rant</h1>
                <div>
                  <img src="/images/coffeeForRestRant.jpg" alt="Coffee" />
                  <div>
                    Photo by <a href="AUTHOR_LINK">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/Y3AqmbmtLQI">Unsplash</a>   
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home
