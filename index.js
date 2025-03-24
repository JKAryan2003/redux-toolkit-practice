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