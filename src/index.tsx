import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './store'
import Toggle from './Panel'
import { createStore } from 'redux'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: 'center' }}>
        <h1>React Redux and Typescript</h1>
        <p>
          Simple boilerplate of how to setup state management with redux and
          react-typescript.
        </p>
        <Toggle />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
