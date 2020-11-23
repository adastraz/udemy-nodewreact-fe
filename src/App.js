import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import { connect } from 'react-redux'
import { fetchUser } from './actions'

import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App(props) {
  useEffect( () => {
    props.fetchUser()
  }, [])

  return (
    <div className="App container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          {/* <Route path='/surveys/new' component={} /> */}
        </div>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    user: state.user
  }
}

export default connect (mapStateToProps, { fetchUser })(App)

// function fetchAlbums() { 
//   fetch('apilink')
//     .then(res => res.json())
//       .then(json => console.log(json))
// }

// const fetchAlbums = async () => {
//   const res = await fetch('apilink')
//   const json = await res.json()

//   console.log(json)
// }