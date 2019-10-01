import { ToggleState, ToggleActionTypes, TOGGLE_VISIBILITY } from './types'

const initialState: ToggleState = {
  showMessage: false,
}

export function toggleReducer(
  state = initialState,
  action: ToggleActionTypes,
): ToggleState {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      return {
        showMessage: !state.showMessage,
      }
    default:
      return state
  }
}
