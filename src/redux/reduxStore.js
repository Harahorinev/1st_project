import { combineReducers, createStore } from 'redux'
import profilePageReducer from './profilePageReducer.js'
import messagePageReducer from './messagePageReducer.js'

let reducers = combineReducers({
  messagePage: messagePageReducer,
  profilePage: profilePageReducer,
})

let store = createStore(reducers)

export default store
