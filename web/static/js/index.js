import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import '../scss/main.scss'

import { Socket } from  '../../../deps/phoenix/priv/static/phoenix'

let socket = new Socket("/socket", {
  logger: ((kind, msg, data) => { console.log(`${kind}: ${msg}`, data) })
})

socket.connect({user_id: "123"})
socket.onOpen( ev => console.log("OPEN", ev) )
socket.onError( ev => console.log("ERROR", ev) )
socket.onClose( e => console.log("CLOSE", e))

import { App, Home, Lobby } from './containers'
//import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
import createLogger from 'redux-logger'

const store = createStore(
  combineReducers({
    root: (state = {}) => state,
    routing: routerReducer
  }),
  {},
  applyMiddleware(
    thunk,
    routerMiddleware(browserHistory),
    createLogger()
  )
)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

const Foo = () => <div>Foo</div>;
const Bar = () => <div>Bar</div>;


ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="lobby/:hashid" component={Lobby}/>
      <Route path="foo" component={Foo}/>
      <Route path="bar" component={Bar}/>
    </Route>
  </Router>
</Provider>, document.getElementById('root'))
