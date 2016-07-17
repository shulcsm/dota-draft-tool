import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { newLobby } from '../actions'


const Home = ({ dispatch}) => (
  <div className="jumbatron">
    <h1>Start drafting</h1>
    <p>Write some description.</p>
    <p>
      <a onClick={() => dispatch(newLobby())}
	 className="btn btn-lg btn-primary">
	Create new draft
      </a>
    </p>
  </div>
)

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Home)
