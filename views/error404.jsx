const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Ooops, sorry, we can't find this page!</p>
                <div>
                  <img src="/images/coffeeForRestRant.jpg" alt="Coffee" />
                  <div>
                    Photo by <a href="AUTHOR_LINK">Nathan Dumlao</a> on <a href="https://unsplash.com/photos/Y3AqmbmtLQI">Unsplash</a>   
                  </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404