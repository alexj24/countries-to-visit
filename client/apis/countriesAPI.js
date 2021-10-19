import request from 'superagent'

export function searchCountries (searchTerm) {
  return request
    .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
    .then(res => res.body)
}