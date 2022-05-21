const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div key={"col-sm-6"}>
            <h2>{place.name}</h2>
            <p key={"text-center1"}>
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p key={"text-center"}>
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
      })
      
    return (
        <Def>
            <main>
                <h1>Best Late Night Spots in Town!</h1>
                <div className="row">
                {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index