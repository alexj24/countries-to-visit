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

  // const saveCountry = (country) => { //FINISH THIS FUNCTION
  //   const { id, title } = country // add stuff in here
  //   dispatch(addACountry(id, title)) // and in here
  // }

  const renderList = () => { // Edit layout of this function
      return <div>
        {searchResults.map(country => <div key={country.cca2}>
          <img className="results-img" src={country.flags.png} />
          <p>{country.name.common} {country.subregion} <button onClick={() => saveCountry(country)}>Add</button> </p>
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

