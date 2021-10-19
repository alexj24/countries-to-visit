const connection = require('./connection')

function getAllCountries (db = connection) {
  return db('countries')
    .select()
}

function addCountry (newCountry, db = connection) {
  return db('countries')
    .insert(newCountry)
}

function updateCountry (id, newInfo, db = connection) {
  return db('countries')
    .update(newInfo)
    .where('id', id)
}

function deleteCountry (id , db = connection) {
  return db('countries')
    .where('id', id)
    .del()
}

module.exports = {
    getAllCountries,
    addCountry,
    updateCountry,
    deleteCountry
}