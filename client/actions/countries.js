import { fetchAllCountries, postCountry, updateCountryVisited, deleteACountry } from '../apis/countries'

export const SAVE_ALL_COUNTRIES = 'SAVE_ALL_COUNTRIES'
export const SAVE_ONE_COUNTRY = 'SAVE_ONE_COUNTRY'
export const COUNTRY_VISITED = 'COUNTRY_VISITED'
export const DELETE_COUNTRY = 'DELETE_COUNTRY'

// ACTION CREATORS

function saveAllCountries (countries) {
  return {
    type: SAVE_ALL_COUNTRIES,
    theArr: countries
  }
}

function saveOneCountry (country) {
  return {
    type: SAVE_ONE_COUNTRY,
    country
  } 
}

function countryVisited (countryId) {
  return {
    type: COUNTRY_VISITED,
    countryId
  }
}

function deleteCountry (countryId) {
  return {
    type: DELETE_COUNTRY,
    countryId
  }
}



// THUNKS

export function getAllCountriesThunk () {
  return (dispatch) => {
    fetchAllCountries()
      .then(countries => {
        dispatch(saveAllCountries(countries))
      })
  }
}

export function countryVisitedThunk (countryId) {
  return (dispatch) => {
    updateCountryVisited(countryId)
      .then((everythingIsFine) => {
        if (!everythingIsFine) { // DELETE THIS??
          throw new Error('oops')
        }

        dispatch(countryVisited(countryId))
      })
  }
}

export function deleteCountryThunk (countryId) {
  return(dispatch) => {
    deleteACountry(countryId) //API call
    .then(() => {
      dispatch(deleteCountry(countryId)) //ACTION call
      })
    .catch(err => {console.log(err.message)})

  }
}

export function addACountry (name, flag, continent) {
  const newCountry = {
    name,
    flag,
    continent
  }
  return (dispatch) => {
    postCountry(newCountry)
      .then((obj) => {
        const { newId } = obj
        newCountry.id  = newId
        newCountry.visited = false

        dispatch(saveOneCountry(newCountry))
      })
  }
}