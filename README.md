react fundamentals and advanced topics
react hooks
react router
react formik
react storybook
react render
react table
react typescript
react query
react styled components
react redux


++REDUX++

redux is a predichable state container for JS.
1: for JS: use with react and other libraey, its also a libraey.
2: state container: store application or component state. state shares by all the individual components of thet app. (data and UI logic)
3: predictable: redux is state container, state can change any time, state can pending or complete, redux track the all states.

manage groble state of application in predictable way.

Redux toolkit: redux toolkit is abstraction over redux.
redux need:
	redus configuring is complicated
	redux need a lot of other packges
	redux require to much boilerplate code
	
	
React ---> React-Redux(bind react with redux) <--- redux (redux toolkit)

React: 		UI libraey
Redux: 		state managing libraey
Redux-Toolkit: 	a libraey provide abstraction over redux
React-redux: 		a libraey provide binding to use redux in react



Three Principles
1: store: hold the state of the application, store data in single store object as object
2: action: that describes what happened in the application, onay way to change the state
3: reducer:  handle the action and decide how to update the state, how to change state according that action its get current state and return new state