const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const applyMiddlewarre = redux.applyMiddleware

const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// const CAKE_ORDERED = 'CAKE_ORDERED'
// const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
// const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
// const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// // action defined
// function orderCake() {
//   return {
//     type: CAKE_ORDERED,
//     payload: 1
//   }
// }

// function restockCake(quanity) {
//   return {
//     type: CAKE_RESTOCKED,
//     payload: quanity
//   }
// }

// function orderIceCream() {
//   return {
//     type: ICECREAM_ORDERED,
//     payload: 1
//   }
// }

// function restockIceCream(quanity) {
//   return {
//     type: ICECREAM_RESTOCKED,
//     payload: quanity
//   }
// }

// const initialCakeState = {
//   numOfCakes: 10
// }

// const initialIceCreamState = {
//   numOfIceCreams: 10
// }

// reducer
// const cakeReducer = (state = initialCakeState, action) => {
//   switch(action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1
//       }
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload
//       }
//     default:
//       return state
//   }
// }

// const iceCreamReducer = (state = initialIceCreamState, action) => {
//   switch(action.type) {
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams -1
//       }
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams + action.payload
//       }
//     default:
//       return state
//   }
// }

//combining reducers
// const rootReducer = redux.combineReducers({
//   cake: cakeReducer,
//   icecream: iceCreamReducer
// })

//store created and the responsibilities 
// const store = createStore(rootReducer, applyMiddlewarre(logger))
// console.log('Initial State', store.getState());

// const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
// const unsubscribe = store.subscribe(() => {})

//bindACtionCreators
// const actions = bindActionCreators(
//   { orderCake, restockCake, orderIceCream, restockIceCream},
//   store.dispatch
// )

// actions.orderCake()
// actions.restockCake(2)
// actions.restockCake(1)

// actions.orderIceCream()
// actions.orderIceCream()
// actions.restockIceCream(2)

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))
// store.dispatch(restockCake(4))
// store.dispatch(restockCake(1))

// unsubscribe()


//redux toolkit

const store = require('./src/app/store')
const cakeActions = require('./src/features/cake/cakeSlice').cakeActions
const icecreamActions = require('./src/features/icecream/icecreamSlice').icecreamActions
const fetchUsers = require('./src/features/user/userSlice').fetchUsers

console.log('Initial state', store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log('Updated state', store.getState());
// })

const unsubscribe = store.subscribe(() => {
  
})

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(5))


// unsubscribe()