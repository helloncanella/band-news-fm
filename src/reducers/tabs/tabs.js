import {CHANGE_TAB} from '../../constants/action-types'

export const initialTabsState = 'columnists'

export function tabs(state = initialTabsState, action = {}) {
    switch (action.type) {
        case CHANGE_TAB:
            return action.selectedTab
        default:
            return state
    }
}