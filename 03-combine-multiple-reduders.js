/* 
shop is just a reducer
*/


const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;


// Action: only describe that what will happen
const CAKE_ORDER = 'CAKE_ORDER';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDER = 'ICECREAM_ORDER'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'


// cake actions methods
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



// icscream actions methods
function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDER,
    payload: qty,
  };
}


function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}



// Reducer: specify that how to change the state, get old state and action and return new state

const initialCakeState = {
  numOfCakes: 10,
}

const initialIceCreamState = {
  numOfIceCream: 10,
}



const cakeReducer = (state = initialCakeState, action)=>{
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

const iceCreamReducer = (state = initialIceCreamState, action)=>{
  switch (action.type){
    case ICECREAM_ORDER:
      return {
      ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      }
    case ICECREAM_RESTOCKED:
      return {
      ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      }
    default:
      return state
  }
}

// combin the all reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});


/*
Redux Store: one store for an application
1. Its hold application state
2. access to state via getState()
3. state update via dispatch(action) 
4. registers listeners via subscribe(listener)
5. unregistering of listeners vis function returned by subscribe(listener) 
*/

// method from rexus libraey pass the rootReducer
const store = createStore(rootReducer);
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=> console.log('Update state', store.getState()));


// bind all action 
const action = bindActionCreators({orderCake, restockCake, orderIceCream, restockIceCream}, store.dispatch);
action.orderCake();
action.orderCake();
action.orderCake();
action.restockCake(3);

action.orderIceCream(2);
action.restockIceCream(3);


// store the changestate
unsubscribe()
