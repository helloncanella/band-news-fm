import {expect} from 'chai'
import {tabs, initialTabsState} from './tabs'

import {CHANGE_TAB} from '../../constants/action-types'


describe('Tabs reducer', function () {

    it('when action type is CHANGE_TAB change the selected tab to argument in the action', () => {

        let
            selectedTab = 'podcasts',
            action = {
                type: CHANGE_TAB,
                selectedTab
            },
            oldState = {
                selectedColumnist: 'columnists',
                any: 'ola'
            }

        expect(tabs(oldState, action)).to.equal('podcasts')
    })
    it('when the action type is different from described above return the initial state', () => {
        let
            action = undefined,
            oldState = undefined

        expect(tabs(oldState, action)).to.equal(initialTabsState)
    })
}); 
