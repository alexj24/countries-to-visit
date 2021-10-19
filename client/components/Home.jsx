// Modules
import React from 'react'
import { connect } from 'react-redux'

// Components
import AddCountry from './AddCountry'

// Functions
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
      <h3>HOME</h3>

      <AddCountry />

      <p>To visit:</p>
      <ul>
        {toVisit.map(country => (
          <li key={country.id}>
            {country.name}
            <button onClick={() => clickHandler(country.id)}>Visited!</button>
            <button onClick={() => deleteHandler(country.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Visited:</p>
      <ul>
        {visited.map(country => 
        <li key={country.id}>
          {country.name}
          <button onClick={() => deleteHandler(country.id)}>Delete</button>
        </li>)}
      </ul>
    </>
  )
}

function mapReduxToProps (globalState) {
  return {
    countries: globalState.countries
  }
}

export default connect(mapReduxToProps)(Home)
