import {expect} from 'chai'

import {CHANGE_TAB} from '../../constants/action-types'

import {changeTab} from './tab-actions'
 

describe('Tab Actions', () => {   

    describe('changeTab', () => {
        it('return type SELECT_COLUMNIST', function () {
            let tabName = 'columinists'   
            
            expect(changeTab(tabName)).to.deep.equal({
                type: CHANGE_TAB,
                tabName
            })
        });
    })


})