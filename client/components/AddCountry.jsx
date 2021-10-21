import React, { useState } from 'react'
import { connect } from 'react-redux'

import { searchCountries } from '../apis/countriesAPI'
import { addACountry} from '../actions/countries'

function AddMovie (props) {
  const { dispatch } = props
  const [formIsVisible, setFormVisible] = useState(true)
  const [searchTerm, setSearch] = useState('')
  const [searchResults, setResults] = useState([])

  const toggleForm = () => {
    setFormVisible(!formIsVisible)
  }

  const handleTyping = (evt) => {
    setSearch(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    searchCountries(searchTerm)
      .then(results => {
        setResults(results)
      })
  }
  
  const saveCountry = (country) => {
    const name = country.name.common
    const flag = country.flags.png
    const continent = country.subregion
    dispatch(addACountry( name, flag, continent ))
  }

  const renderList = () => {
      return <div className="card-container search">
        {searchResults.map(country => <div key={country.cca2} className="country-card">
          <img className="results-img" src={country.flags.png} />
          <p className="name"><strong>{country.name.common}</strong></p>
          <p><strong>Region:</strong> {country.subregion}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p className="add-button"><button onClick={() => saveCountry(country)}>Add</button> </p>
          </div>)}
      </div>
  }

  const renderForm = () => {
    return <> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search for a country: </label>
        <input type="text" id="name" onChange={handleTyping} autoComplete="off" />
        <button>Search</button>
        <button onClick={toggleForm}>Close</button>
      </form>
    </>
  }

  return (
    <>
      <h3>Add Country</h3>
      { 
        formIsVisible ? (
        <>
          {renderForm()}
          
          {renderList()}
        </> 
        ) : <button onClick={toggleForm}>Add a country</button>
      }

    </>
  )
}

export default connect() (AddMovie)

