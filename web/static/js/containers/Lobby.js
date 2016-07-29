import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { join } from '../modules/connection'


const lobby = {
  connected: true,
  state: 'NEW', 
}


class Lobby extends Component {
  componentDidMount() {
    const { join, params: { hashid } } = this.props
    join(`lobby:${hashid}`)
  }
  
  render() {
    const { params: { hashid } } = this.props;
    return (
      <div>
	<h1>Lobby: {hashid}</h1>
      </div>
    )
  }
}

export default connect(null, { join })(Lobby)
