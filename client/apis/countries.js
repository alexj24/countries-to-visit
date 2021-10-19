import request from 'superagent'

export function fetchAllCountries () {
  return request
    .get('/api/v1/countries')
    .then(response => response.body)
}

export function updateCountryVisited (id) {
  return request
    .patch('/api/v1/countries/' + id)
    .send({ visited: true })
    .then(response => response.body.itWorked)
}

export function postCountry (newCountry) {
  return request 
    .post('/api/v1/countries')
    .send(newCountry)
    .then(res => res.body)
}