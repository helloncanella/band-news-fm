import AudioElement from './audio-element'
import {shallow} from  'enzyme'
import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {spy} from 'sinon'

chai.use(chaiEnzyme()) // Note the invocation at the end

function wrapper(props) {

    let
        root = shallow(<AudioElement {...props} />),
        audio = root.find('audio')
    return { audio, root }

}


describe('AudioElement', function () {

    describe('url prop', () => {
        it('is rendered', () => {
            let
                url = 'www.teco.com',
                audio = wrapper({ url }).audio

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

                audio = wrapper({ setAudioDuration, setAudioIsReady }).audio

            audio.simulate('canPlay', event)
            expect(setAudioIsReady.called).to.true
            expect(setAudioDuration.calledWith(duration)).to.true
        })

    })

    describe('podcastIsPlaying prop', () => {

        let _playAudio, _pauseAudio;

        beforeEach(() => {
            _playAudio = spy(),
                _pauseAudio = spy()
        })

        it('when true should play element', () => {

            let
                podcastIsPlaying = false,
                component = wrapper({}).root,
                componentWillReceiveProps = component.instance().componentWillReceiveProps,
                thisObj = {
                    _playAudio,
                    _pauseAudio,
                    props: {
                        currentTime: 0,
                        podcastIsPlaying
                    }
                },
                newProps = {
                    currentTime: 0,
                    podcastIsPlaying: true
                }

            componentWillReceiveProps.call(thisObj, newProps)

            expect(_playAudio.called).to.true
            expect(_pauseAudio.called).to.false
        })

        it('when false should pause element', () => {
            let
                podcastIsPlaying = true,
                component = wrapper({}).root,
                componentWillReceiveProps = component.instance().componentWillReceiveProps,
                thisObj = {
                    _playAudio,
                    _pauseAudio,
                    props: {
                        currentTime: 0,
                        podcastIsPlaying
                    }
                },
                newProps = {
                    currentTime: 0,
                    podcastIsPlaying: false
                }

            componentWillReceiveProps.call(thisObj, newProps)

            expect(_pauseAudio.called).to.true
            expect(_playAudio.called).to.false
        })
    })

    describe('timeupdate event', () => {
        it('triggers changeCurrentTime', () => {
            let
                changeCurrentTime = spy(),
                audio = wrapper({ changeCurrentTime }).audio,
                currentTime = 1232131323

            audio.simulate('timeUpdate', { target: { currentTime } })

            expect(changeCurrentTime.calledWith(currentTime)).to.true
        })
    })

    describe('currentTime change solicitation will succeed', () => {
        it('when it is bigger than the currentTime prop in 1000 seconds', () => {
            let
                _changeCurrentTime = spy(),

                component = wrapper({}).root,

                componentWillReceiveProps = component.instance().componentWillReceiveProps,

                thisObj = {
                    props: {
                        currentTime: 90,
                        podcastIsPlaying: false
                    },
                    _changeCurrentTime
                },

                newCurrentTime = 80,

                newProps = {
                    currentTime: newCurrentTime,
                    podcastIsPlaying: false
                }

            componentWillReceiveProps.call(thisObj, newProps)

            expect(_changeCurrentTime.calledWith(newCurrentTime)).to.true

        })
    })



})
