import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { AppState } from './store'
import { ToggleState } from './store/toggle/types'
import { CounterState } from './store/counter/types'

import { incrementCounter, decrementCounter } from './store/counter/actions'
import { toggleVisibility } from './store/toggle/actions'

import { CounterActionTypes } from './store/counter/types'
import { ToggleActionTypes } from './store/toggle/types'

interface PanelProps {
  toggle: ToggleState
  counter: CounterState
  toggleVisibility: typeof toggleVisibility
  incrementCounter: typeof incrementCounter
  decrementCounter: typeof decrementCounter
}

const Panel: React.FC<PanelProps> = ({
  toggle,
  counter,
  toggleVisibility,
  incrementCounter,
  decrementCounter,
}) => {
  return (
    <div style={{ display: 'flex', width: '70%', margin: 'auto' }}>
      <div
        style={{
          width: '50%',
          boxShadow: '5px 5px 10px #888888',
          padding: '10px',
          margin: '5px',
        }}
      >
        <h3>
          <code>
            state: {'{'} counter: number {'}'}
          </code>
        </h3>
        <div>{counter.counter}</div>
        <button onClick={incrementCounter}>+</button>
        <button onClick={decrementCounter}>-</button>
      </div>
      <div
        style={{
          width: '50%',
          boxShadow: '5px 5px 10px #888888',
          padding: '10px',
          margin: '5px',
        }}
      >
        <h3>
          <code>
            state: {'{'} showMessage: boolean {'}'}
          </code>
        </h3>
        <button onClick={toggleVisibility}>Toggle</button>
        {toggle.showMessage && <p>Toggled content</p>}
      </div>
    </div>
  )
}

// -----------------------REDUX------------------------------------------------------------//
const mapStateToProps = (state: AppState) => {
  return {
    toggle: state.toggle,
    counter: state.counter,
  }
}
const mapDispatchToProps = (
  dispatch: Dispatch<CounterActionTypes | ToggleActionTypes>,
) =>
  bindActionCreators(
    { incrementCounter, toggleVisibility, decrementCounter },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panel)
// -----------------------REDUX------------------------------------------------------------//
