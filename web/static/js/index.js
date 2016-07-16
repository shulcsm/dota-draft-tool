import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { App } from './containers'
//import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
	routing: routerReducer
    })
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const Foo = () => <div>Foo</div>
const Bar = () => <div>Bar</div>

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
	    <Route path="/" component={App}>
		<Route path="foo" component={Foo}/>
		<Route path="bar" component={Bar}/>
	    </Route>
	</Router>
    </Provider>,
    document.getElementById('root')
)
