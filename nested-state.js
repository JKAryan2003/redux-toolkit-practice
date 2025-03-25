const redux = require('redux')
const produce = require('immer').produce

const STREET_UPDATED = 'STREET_UPDATED'

const initialState = {
  name: 'Aryan',
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
}

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case STREET_UPDATED:
      // produce accepts draft copy of the state
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    default: {
      return state
    }
  }
}

const store = redux.createStore(reducer)
console.log('Initial state ',store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState());
})

store.dispatch(updateStreet('421 Hook'))

// immer changes the state directly as if it is mutable