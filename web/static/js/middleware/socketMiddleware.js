import { Socket as PhoenixSocket } from  '../../../../deps/phoenix/priv/static/phoenix'
import { CONNECT, DISCONNECT, connecting, connected } from '../modules/connection'

const socketMiddleware = (endPoint, opts = {}) => {
  var socket = null

  const onOpen = (socket, store) => evt => {
    store.dispatch(connected())
  }
  
  return store => next => action => {
    switch (action.type) {
      case CONNECT:
	if (socket != null) {
	  scoket.disconnect()
	}

	store.dispatch(connecting())
	
	socket = new PhoenixSocket(endPoint, opts)
	socket.connect()

	// Register callbacks
	socket.onOpen(onOpen(socket, store))
	
	break;
	
      case DISCONNECT:
	break;

      default:
	return next(action);
    }
  }
}

export default socketMiddleware
