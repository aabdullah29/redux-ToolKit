// /* 
// https://www.youtube.com/watch?v=7cREd9mesMg&list=PLC3y8-rFHvwiaOAuTtVXittwybYIorRB3&index=3

// store: hold the state of the application, store data in single store object as object
// action: that describes what happened in the application, onay way to change the state
// reducer:  handle the action and decide how to update the state, how to change state according that action and its return new state

// entities 
// shop
// shopkeeper
// customer

// activities
// customer - order a cake
// shopkeeper - box a cake from shelf
//            - receipt to keep track

// */


const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;


// Action: only describe that what will happen
const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'


function orderCake() {
  return {
    type: CAKE_ORDER,
    payload: 1,
  };
}


function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

// Reducer: specify that how to change the state, get old state and action and return new state

const initialState = {
  numOfCakes: 10,
}

const reducer = (state = initialState, action)=>{
  switch (action.type){
    case CAKE_ORDER:
      return {
      ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    case CAKE_RESTOCKED:
      return {
      ...state,
        numOfCakes: state.numOfCakes + action.payload,
      }
    default:
      return state
  }
}

/*
Redux Store: one store for an application
1. Its hold application state
2. access to state via getState()
3. state update via dispatch(action) 
4. registers listeners via subscribe(listener)
5. unregistering of listeners vis function returned by subscribe(listener) 
*/

// method from rexus libraey
const store = createStore(reducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=> console.log('Update state', store.getState()));

// pass the action
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))


// bind all action 
const action = bindActionCreators({orderCake, restockCake}, store.dispatch);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockCake(3);


// store the changestate
unsubscribe()
