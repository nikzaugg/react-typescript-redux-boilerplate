// -------State of App (initial)------
export interface appState {
  showMessage: boolean;
  bold: boolean;
}

export const initialState: appState = {
  showMessage: false,
  bold: true
};

// ----------Action Types--------------
export enum ActionType {
  TOGGLE_MESSAGE = "TOGGLE_MESSAGE",
  TOGGLE_BOLD = "TOGGLE_BOLD"
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
    default:
      return state;
  }
}




