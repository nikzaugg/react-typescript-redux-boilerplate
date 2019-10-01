import { ActionType, BaseAction } from "../reducers/appReducer";

export interface CounterAction extends BaseAction {
  type:
  ActionType.INCREMENT_COUNTER | ActionType.DECREMENT_COUNTER
}

export const incrementCounter = (): CounterAction => {
  return {
    type: ActionType.INCREMENT_COUNTER
  };
}

export const decrementCounter = (): CounterAction => {
  return {
    type: ActionType.DECREMENT_COUNTER
  };
}
