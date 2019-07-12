import { TOGGLE_SETTING } from './types.actions'

export function toggleSetting(settingName) {
  console.log(settingName)
  return {
    type: TOGGLE_SETTING,
    payload: settingName
  }
}