import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import reducer from './modules/reducers';
import '../scss/main.scss'

import { Socket } from  '../../../deps/phoenix/priv/static/phoenix'


import { App, Home, Lobby } from './containers'
//import reducers from '<project-path>/reducers'

// Add the reducer to your store on the `routing` key
import createLogger from 'redux-logger'

const store = createStore(
  reducer,
  {},
  applyMiddleware(
    thunk.withExtraArgument({ socket: new Socket('/socket')}),
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
