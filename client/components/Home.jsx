import React from 'react'
import { connect } from 'react-redux'

import AddCountry from './AddCountry'

import { countryVisitedThunk, deleteCountryThunk } from '../actions/countries'


function Home (props) {
  const { countries, dispatch } = props

  const toVisit = countries.filter(country => !country.visited)
  const visited = countries.filter(country => country.visited)

  const clickHandler = (id) => {
    dispatch(countryVisitedThunk(id))
  }

  const deleteHandler = (id) => {
    dispatch(deleteCountryThunk(id))
  }

  return (
    <>
      <h3>Yet To Visit:</h3>
      <div className="card-container">
        {toVisit.map(country => (
          <div key={country.id} className="country-card">
            <img className="results-img" src={country.flag} />
            <p className="name"><strong>{country.name}</strong></p>
            <p><strong>Region:</strong> {country.continent}</p>
            <p><strong>Capital:</strong> {country.capital} ADD CAPITAL IN DB</p>
            <p className="add-button"><button onClick={() => deleteHandler(country.id)}>Delete</button><button onClick={() => clickHandler(country.id)}>Visited!</button></p>
        </div>
        ))}
      </div>

      <h3>Visited:</h3>
      <div className="card-container">
        {visited.map(country => 
          <div key={country.id} className="country-card">
            <img className="results-img" src={country.flag} />
            <p className="name"><strong>{country.name}</strong></p>
            <p><strong>Region:</strong> {country.continent}</p>
            <p><strong>Capital:</strong> {country.capital} ADD CAPITAL IN DB</p>
            <p className="add-button"><button onClick={() => deleteHandler(country.id)}>Delete</button></p>
          </div>
        )}
      </div>

      <AddCountry />
    </>
  )
}

function mapReduxToProps (globalState) {
  return {
    countries: globalState.countries
  }
}

export default connect(mapReduxToProps)(Home)
