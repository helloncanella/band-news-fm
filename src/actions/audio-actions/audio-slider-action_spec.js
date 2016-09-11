import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {onSliderDragStop} from './audio-actions'

import { expect } from 'chai' // You can use any testing library

import {
    CHANGE_CURRENT_TIME,
} from '../../constants/action-types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Slider', () => {

    let store, duration;

    beforeEach(() => {
        duration = 100,
        store = mockStore({ duration })
    })


    it('changes the current time in the same amount of passed percentage', () => {

        let
            percentage = 0.1,
            expectedActions = [
                {
                    type: CHANGE_CURRENT_TIME,
                    currentTime:  percentage * duration 
                },
            ]
         

        store.dispatch(onSliderDragStop(percentage))
        
        expect(store.getActions()).to.deep.equal(expectedActions)


    })

})
