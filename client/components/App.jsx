import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'

import { getAllCountriesThunk } from '../actions/countries'

function App (props) {
  const { dispatch } = props

  useEffect(() => {
    dispatch(getAllCountriesThunk())
  }, [])

  return (
    <>
      <h1>Countries to Visit</h1>
      <h2>List of countries around the world to visit one day...</h2>
      <Route exact path='/' component={Home} />
    </>
  )
}

export default connect()(App)
