import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch, bindActionCreators } from 'redux'

import { AppState } from '../store'
import { ToggleState } from '../store/toggle/types'
import { CounterState } from '../store/counter/types'

import { incrementCounter, decrementCounter } from '../store/counter/actions'
import { toggleVisibility } from '../store/toggle/actions'

import { CounterActionTypes } from '../store/counter/types'
import { ToggleActionTypes } from '../store/toggle/types'

import { Button } from '../containers/Button'
import { Segment } from '../containers/Segment'

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
      <Segment raised={true}>
        <h3>
          <code>
            state: {'{'} counter: number {'}'}
          </code>
        </h3>
        <div>{counter.counter}</div>
        <Button color={'red'} onClick={decrementCounter}>
          -
        </Button>
        <Button color={'blue'} onClick={incrementCounter}>
          +
        </Button>
      </Segment>
      <Segment raised={true}>
        <h3>
          <code>
            state: {'{'} showMessage: boolean {'}'}
          </code>
        </h3>
        <Button color={'green'} onClick={toggleVisibility}>
          Toggle
        </Button>
        {toggle.showMessage && <p>Toggled content</p>}
      </Segment>
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
