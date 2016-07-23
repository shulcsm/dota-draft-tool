import React, { Component, PropTypes } from 'react'

const lobby = {
  connected: true,
  state: 'NEW', 
}


class Lobby extends Component {
  render() {
    const { params: { hashid } } = this.props;
    return (
      <div>
	<h1>Lobby: {hashid}</h1>
      </div>
    )
  }
}

export default Lobby
