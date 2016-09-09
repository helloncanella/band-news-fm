import {expect} from 'chai'

import {CHANGE_TAB} from '../../constants/action-types'

import {changeTab} from './tabs-actions'
 

describe('Tab Actions', () => {   

    describe('changeTab', () => {
        it('return type SELECT_COLUMNIST', function () {
            let tabName = 'columnists'   
            
            expect(changeTab(tabName)).to.deep.equal({
                type: CHANGE_TAB,
                tabName
            })
        });
    })


})