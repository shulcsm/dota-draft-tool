import React, { Component,  PropTypes } from 'react'
import { Link } from 'react-router'

const App = ({ children }) => (
    <div>
	<Link to="/">Home</Link>
	<Link to="/foo">Foo</Link>
	<Link to="/bar">Bar</Link>
	{children}
    </div>
)

export default App
