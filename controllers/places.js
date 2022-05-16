const app = require('express').Router()

// GET /places
app.get('/', (req, res) => {
    let places = [{
        name: 'Chritys',
        city: 'Greenville',
        state: 'NC',
        cuisines: 'Euro Pub',
        pic: 'https://img.restaurantguru.com/re4d-design-Christys-Euro-Pub.jpg'
      }, {
        name: 'Sup Dogs',
        city: 'Greenville',
        state: 'NC',
        cuisines: 'Hot Dogs and Hamburgers',
        pic: 'https://gray-witn-prod.cdn.arcpublishing.com/resizer/EBDQhlXbhsrXP9AnHHT0tQ8FSBs=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/MRA6OIUOYBPZHG2BCO4ZHA4K4I.jpg'
      }]
      
      res.render('places/index', { places })

  })
  

module.exports = app

