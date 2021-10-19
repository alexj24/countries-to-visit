import { SAVE_ALL_COUNTRIES, SAVE_ONE_COUNTRY, COUNTRY_VISITED } from '../actions/countries' 

function reducer (state = [], action) {
  switch (action.type) {
    case SAVE_ALL_COUNTRIES:
      return action.theArr
      case SAVE_ONE_COUNTRY:
        return [...state, action.country]
    case COUNTRY_VISITED:
      return state.map(country => {
        if (country.id === action.countryId) {
          country.visited = true
        }
        return country
      })
    default:
      return state
  }
}

export default reducer
