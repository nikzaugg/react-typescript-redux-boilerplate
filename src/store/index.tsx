import { toggleReducer } from './toggle/reducers'
import { counterReducer } from './counter/reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  toggle: toggleReducer,
  counter: counterReducer,
})

export type AppState = ReturnType<typeof rootReducer>
