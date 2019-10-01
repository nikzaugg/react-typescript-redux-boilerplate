import * as React from "react";
import { connect } from "react-redux";
import { ToggleAction, toggleMessage } from "./redux/actions/toggleActions";
import { Dispatch, bindActionCreators } from "redux";
import { appState } from "./redux/reducers/appReducer";

const Toggle: React.FC<ToggleProps> = ({ messageVisibility, toggleMessage, bold }) => {
  return (
    <div>
      {bold ? <div>BOLD!</div> : null}
      <button onClick={toggleMessage}>Toggle</button>
      {messageVisibility && <p>Toggled content</p>}
    </div>
  )
};


// -----------------------REDUX------------------------------------------------------------//
const mapStateToProps = (state: appState) => {
  console.log(state);
  return {
    messageVisibility: state.showMessage,
    bold: state.bold
  }
}

const mapDispatchToProps = (dispatch: Dispatch<ToggleAction>) =>
  bindActionCreators({ toggleMessage }, dispatch);



type ToggleProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
// -----------------------REDUX------------------------------------------------------------//
