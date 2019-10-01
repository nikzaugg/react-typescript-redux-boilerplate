// -------State of App (initial)------
export interface appState {
  showMessage: boolean;
  bold: boolean;
  counter: number;
}

export const initialState: appState = {
  showMessage: false,
  bold: true,
  counter: 0
};

// ----------Action Types--------------
export enum ActionType {
  TOGGLE_MESSAGE = "TOGGLE_MESSAGE",
  TOGGLE_BOLD = "TOGGLE_BOLD",
  INCREMENT_COUNTER = "INCREMENT_COUNTER",
  DECREMENT_COUNTER = "DECREMENT_COUNTER"
}

export interface BaseAction {
  type: ActionType;
}

// ----------State Reducet -------------
export const appReducer = (
  state: appState = initialState,
  action: BaseAction
) => {
  switch (action.type) {
    case ActionType.TOGGLE_MESSAGE:
      return { ...state, showMessage: !state.showMessage };
    case ActionType.TOGGLE_BOLD:
      return { ...state, bold: !state.bold }
    case ActionType.INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 }
    case ActionType.DECREMENT_COUNTER:
      return { ...state, counter: state.counter - 1 }
    default:
      return state;
  }
}




