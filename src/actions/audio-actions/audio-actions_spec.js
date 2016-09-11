import {expect} from 'chai'

import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    SET_AUDIO_DURATION,
    CHANGE_CURRENT_TIME
} from '../../constants/action-types'

import {
    playAudio,
    pauseAudio,
    audioError,
    setAudioIsReady,
    changeCurrentTime,
    setAudioDuration
} from './audio-actions'


describe('Audio Actions', () => {

    describe('playAudio', () => {
        it('return type PLAY_PODCAST', function () {
            expect(playAudio()).to.deep.equal({
                type: PLAY_PODCAST
            })
        });

    })

    describe('pauseAudio', () => {
        it('return type PAUSE_PODCAST', function () {
            expect(pauseAudio()).to.deep.equal({
                type: PAUSE_PODCAST
            })
        });
    })

    describe('setAudioDuration', () => {
        let duration = 15464

        it('return type SET_AUDIO_DURATION and its value', function () {
            expect(setAudioDuration(duration)).to.deep.equal({
                type: SET_AUDIO_DURATION,
                duration    
            })
        });
    })

    describe('audioError', () => {
        let error = 'errorInformation'

        it('return type ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD with respective error', function () {
            expect(audioError(error)).to.deep.equal({
                type: ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
                error
            })
        });
    })

    describe('setAudioIsReady', () => {
        it('return type SET_AUDIO_IS_READY', function () {
            expect(setAudioIsReady()).to.deep.equal({
                type: SET_AUDIO_IS_READY,
            })
        });
    })

    describe('changeSliderPositon', () => {
        it('return type SET_AUDIO_IS_READY', function () {
            expect(setAudioIsReady()).to.deep.equal({
                type: SET_AUDIO_IS_READY,
            })
        });
    })

    describe('changeCurrentTime', () => {
        let currentTime = 235465

        it('return type CHANGE_CURRENT_TIME with informed currentTime', function () {
            expect(changeCurrentTime(currentTime)).to.deep.equal({
                type: CHANGE_CURRENT_TIME,
                currentTime
            })
        });
    })

})