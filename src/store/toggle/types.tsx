export interface ToggleState {
  showMessage: boolean
}

export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

interface ToggleVisibilityAction {
  type: typeof TOGGLE_VISIBILITY
}

export type ToggleActionTypes = ToggleVisibilityAction
