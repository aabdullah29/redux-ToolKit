## For use redux in react or react-native 

```
npm install reduxjs/toolkit
npm install react-redux
```

### redux hook for get all slice:
```
// this is a custom hook that will gige the all slices
import React from "react";
import { useSelector } from "react-redux";

const useGetReduxState = () => {
  const state = useSelector((state) => state);
  return state;
};

export default useGetReduxState;
```

### redux hook for set new state of specific slice:
```
import { useDispatch } from "react-redux";
import useGetReduxState from "../../customhooks/useGetReduxState";
import { setNavigation } from "./redux/slices/navigationSlice";


  const dispatch = useDispatch();
  const states: any = useGetReduxState();

  dispatch(setNavigation(value));
  // navigationSlice will return the initial state object and the 'navigation' is the property of that initial state object
  const finalAnswer = states.navigationSlice.navigation;
```


### redux get and set new state without hooks:
```
import store from "./redux/store";
import { setNavigation } from "../redux/slices/navigationSlice";

  const states = store.getState();
  // navigationSlice will return the initial state object and the 'navigation' is the property of that initial state object
  const navigation = states.navigationSlice.navigation
  navigation.replace('[Navigtion Path]'));
  store.dispatch(setNavigation(null));
```

