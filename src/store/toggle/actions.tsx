import { TOGGLE_VISIBILITY, ToggleActionTypes } from './types'

export const toggleVisibility = (): ToggleActionTypes => {
  return {
    type: TOGGLE_VISIBILITY,
  }
}
