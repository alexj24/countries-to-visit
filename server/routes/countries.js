const express = require('express')
const router = express.Router()

const db = require('../db/dbFuncs')

router.get('/', (req, res) => {
  db.getAllCountries()
    .then(countries => {
      countries.forEach(country => {
        country.watched = Boolean(country.visited)
      })
      res.json(countries)
    })

})

router.post('/', (req, res) => {
  db.addCountry(req.body)
    .then(idNum => {
      res.json({ newId: idNum[0] })
    })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  db.updateCountry(id, req.body)
    .then((num) => {
      const itWorked = num === 1
      res.json({ itWorked })
    })
})

module.exports = router