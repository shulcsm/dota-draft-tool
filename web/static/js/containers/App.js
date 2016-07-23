import React, { Component,  PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { connect as connectionConnect } from '../modules/connection'

import Loader from '../components/Loader'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    connect: PropTypes.func.isRequired,
    connected: PropTypes.bool.isRequired,
    connecting: PropTypes.bool.isRequired
  }

  componentDidMount() {
    const { connect } = this.props
    connect()
  }
  
  render() {
    const { children, connecting } = this.props;
    
    return (
      <div id="wrap">
        <Loader loading={connecting}/>
      	<div className="container">
	  <nav id="main-nav" className="navbar navbar-dark bg-inverse">
	    <Link to="/" className="navbar-brand">Dota draft tool</Link>
	    <ul className="nav navbar-nav">
	      <li className="nav-item">
		<IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
	      </li>
	      <li className="nav-item">
		<Link to="/foo" className="nav-link" activeClassName="active">Foo</Link>
	      </li>
	      <li className="nav-item">
		<Link to="/bar" className="nav-link" activeClassName="active">Bar</Link>
	      </li>
	    </ul>
	  </nav>
	  {children}
	</div>
      </div>
    )
  }
}

export default connect(
  (state) => (state.connection),
  { connect: connectionConnect }
)(App)
