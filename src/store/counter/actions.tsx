import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  CounterActionTypes,
} from './types'

export const incrementCounter = (): CounterActionTypes => {
  return {
    type: INCREMENT_COUNTER,
  }
}

export const decrementCounter = (): CounterActionTypes => {
  return {
    type: DECREMENT_COUNTER,
  }
}
