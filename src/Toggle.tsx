import * as React from "react";
import { connect } from "react-redux";
import { ToggleAction, toggleMessage } from "./redux/actions/toggleActions";
import { CounterAction, incrementCounter, decrementCounter } from './redux/actions/counterActions'
import { Dispatch, bindActionCreators } from "redux";
import { appState } from "./redux/reducers/appReducer";

const Toggle: React.FC<ToggleProps> = ({ messageVisibility, bold, counter, toggleMessage, incrementCounter, decrementCounter, }) => {
  return (
    <div>
      <div>
        {counter}
      </div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <div>
        <button onClick={toggleMessage}>Toggle</button>
        {messageVisibility && <p>Toggled content</p>}
      </div>
    </div>

  )
};


// -----------------------REDUX------------------------------------------------------------//
const mapStateToProps = (state: appState) => {
  return {
    messageVisibility: state.showMessage,
    bold: state.bold,
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ToggleAction | CounterAction>) =>
  bindActionCreators({ toggleMessage, incrementCounter, decrementCounter }, dispatch);

type ToggleProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
// -----------------------REDUX------------------------------------------------------------//
