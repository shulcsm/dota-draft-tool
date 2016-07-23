import React, { Component,  PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: "CONNECT"
    })
  }
  
  render() {
    const { children } = this.props;
    return(
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
    )
  }
}

export default connect()(App)
