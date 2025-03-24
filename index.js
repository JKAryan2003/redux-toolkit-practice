const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'

// action defined
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quanity: 1
  }
}

const initialState = {
  numOfCakes: 10
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - 1
      }
    default:
      return state
  }
}

//store created and the responsibilities 
const store = createStore(reducer)
console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

store.dispatch(orderCake())