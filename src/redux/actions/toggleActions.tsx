import { ActionType, BaseAction } from "../reducers/appReducer";

export interface ToggleAction extends BaseAction {
  type:
  ActionType.TOGGLE_MESSAGE |
  ActionType.TOGGLE_BOLD;
}

export const toggleMessage = (): ToggleAction => {
  return {
    type: ActionType.TOGGLE_MESSAGE
  };
}

export const toggleBold = (): ToggleAction => {
  return {
    type: ActionType.TOGGLE_BOLD
  };
}
