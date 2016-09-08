import {CHANGE_TAB} from '../../constants/action-types'

export function changeTab(tabName) {
    return {
        type: CHANGE_TAB,
        tabName
    }
}