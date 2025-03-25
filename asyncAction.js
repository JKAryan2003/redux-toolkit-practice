const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequested = () => {
  return {
    type: FETCH_USERS_REQUESTED
  }
}

const fetchUsersSucceded = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users
  }
}

const fetchUsersFailed = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
  }
}

//thunk middleware helps in returning a function from a action creator
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequested())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data.map((user) => user.id)
      dispatch(fetchUsersSucceded(users))
    }).catch(error => {
      dispatch(fetchUsersFailed(error.message))
    })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const unsubscribe = store.subscribe(() => {
  store.getState()
})

store.dispatch(fetchUsers())
