const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

// action defined
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quanity: 1
  }
}

function restockCake(quanity) {
  return {
    type: CAKE_RESTOCKED,
    payload: quanity
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
        ...state,
        numOfCakes: state.numOfCakes - 1
      }
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload
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

store.dispatch(restockCake(3))
store.dispatch(restockCake(4))
store.dispatch(restockCake(1))

unsubscribe()
