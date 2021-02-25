import React from 'react'
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/reduxStore.js'
import ReactDOM from 'react-dom'
import App from './App'

let rerenderIntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        appState={state}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

rerenderIntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderIntireTree(state)
})

reportWebVitals()
