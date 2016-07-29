const CONNECT = 'draft/connection/CONNECT'
const DISCONNECT = 'draft/connection/DISCONNECT'
const CONNECTING = 'draft/connection/CONNECTING'
const CONNECT_SUCCESS = 'draft/connection/CONNECT_SUCCESS'
const CONNECT_FAIL = 'draft/connection/CONNECT_FAIL'

// channel
const JOIN = 'draft/connection/JOIN';
const JOINED = 'draft/connection/JOINED';

const initialState = {
  connected: false,
  connecting: false,
  channels: {}
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CONNECTING:
      return {
	...state,
	connected: false,
	connecting: true
      }
    case CONNECT_SUCCESS:
      return {
	...state,
	connected: true,
	connecting: false
      }
    case CONNECT_FAIL:
      return {
	...state,
	connected: false,
	connecting: false
      }
    default: return state;
  }
}

export default reducer

export const connect = () => (dispatch, getState, { socket }) => {
  dispatch(connecting())
  socket.connect()
  socket.onOpen((evt) => dispatch(connected()))
}

export const join = (topic) => (dispatch, getState, { socket }) => {
  const chan = socket.channel(topic, {})
  chan.join()
}


export const connecting = () => ({ type: CONNECTING })
export const connected = () => ({ type: CONNECT_SUCCESS })
