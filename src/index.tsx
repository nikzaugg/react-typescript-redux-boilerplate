import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './store'
import Toggle from './components/Panel'
import { createStore } from 'redux'
import { Header } from './containers/Header'
import { AppWrapper } from './containers/AppWrapper'
import { Main } from './containers/Main'
import './index.css'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Header>Redux React Typescript</Header>
      <AppWrapper>
        <Main>
          <div style={{ textAlign: 'center' }}>
            <p>
              Simple boilerplate of how to setup state management with redux and
              react-typescript.
            </p>
            <Toggle />
          </div>
        </Main>
      </AppWrapper>
    </Provider>
  )
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
