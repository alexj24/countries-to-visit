import { fetchAllCountries, postCountry, updateCountryVisited } from '../apis/countries'

export const SAVE_ALL_COUNTRIES = 'SAVE_ALL_COUNTRIES'
export const SAVE_ONE_COUNTRY = 'SAVE_ONE_COUNTRY'
export const COUNTRY_VISITED = 'COUNTRY_VISITED'

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
        if (!everythingIsFine) {
          throw new Error('oops')
        }

        dispatch(countryVisited(countryId))
      })
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
        newCounty.id  = newId
        newCounty.watched = false

        dispatch(saveOneCountry(newCounty))
      })
  }
}