import AudioElement from './audio-element'
import {shallow} from  'enzyme'
import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {spy} from 'sinon'

chai.use(chaiEnzyme()) // Note the invocation at the end

function wrapper(props) {

    let {
        url = '',
        setAudioIsReady = () => {}
    } = props,

        audio = shallow(<AudioElement {...props} />).find('audio')


    return audio

}


describe('AudioElement', function () {

    describe('url prop', () => {
        it('is rendered', () => {
            let
                url = 'www.teco.com',
                audio = wrapper({ url })

            expect(audio.props().src).to.equal(url)

        })
    })

    describe('onCanPlay event', () => {
        it('triggers setAudioIsReady and setAudioDuration with duration argument', () => {
            let 
                setAudioIsReady = spy(),
                setAudioDuration = spy(),
                duration = 123,
                event = { target: { duration } },

                audio = wrapper({ setAudioDuration, setAudioIsReady })
            
            audio.simulate('canPlay', event)
            expect(setAudioIsReady.called).to.true
            expect(setAudioDuration.calledWith(duration)).to.true
        })

    })

    xdescribe('isPlaying prop', () => {
        xit('when true should play element', () => {

        })

        xit('when false should pause element', () => {

        })
    })

    xdescribe('timeupdate event', () => {
        xit('triggers changeCurrentTime', () => { })
    })

    xdescribe('currentTime', () => {
        xit('change when currentTime property is bigger than the current in 1000 seconds', () => {

        })
    })



})
