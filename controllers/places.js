const app = require('express').Router()
const places = require('../models/places.js')

  app.get('/', (req, res) => { 
  res.render('places/index', { places })
 })

 app.post('/', (req, res) => {

  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


  app.get('/new', (req, res) => {
      let newPage = [{        
      }]
      res.render('places/new', { newPage })
  })

module.exports = app

