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
    console.log("Country Data: ", country)
    const name = country.name.common
    const flag = country.flags.png
    const continent = country.subregion
    console.log("Name: ", name)
    console.log("Flag: ", flag)
    console.log("Continent: ", continent)
    dispatch(addACountry( name, flag, continent ))
  }

  const renderList = () => { // Edit layout of this function
      return <div>
        {searchResults.map(country => <div key={country.cca2}>
          <img className="results-img" src={country.flags.png} />
          <p><strong>{country.name.common}</strong></p>
          <p>Region: {country.subregion}</p>
          <p>Capital: {country.capital}</p>
          <p><button onClick={() => saveCountry(country)}>Add</button> </p>
          </div>)}
      </div>
  }

  const renderForm = () => {
    return <> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Search for a country: </label>
        <input type="text" id="name" onChange={handleTyping} autoComplete="off" />
        <button>Search</button>
      </form>
        <button onClick={toggleForm}>Close</button>
        <button onClick={clearSearch}>Clear Search</button>
    </>
  }

  const clearSearch = () => { // COMPLETE THIS FUNCTION

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

