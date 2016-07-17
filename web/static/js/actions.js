import { push } from 'react-router-redux'

export const createLobby = () => {
  return fetch('/api/lobby', { method: 'POST' })
}

export const newLobby = () => {
  return dispatch => createLobby()
    .then(res => res.json())
    .then(json => dispatch(push(`/lobby/${json.hashid}`)));
}
