import {expect} from 'chai'
import {audio, initialAudioState} from './audio'

import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_CURRENT_TIME,
    SET_AUDIO_DURATION
} from '../../constants/action-types'


describe('Audio reducer', function () {

    it('when action type is PLAY_PODCAST set podcastIsPlaying to true', () => {

        let
            action = {
                type: PLAY_PODCAST
            },
            oldState = {
                podcastIsPlaying: false,
                trelo: 'biu'
            }

        expect(audio(oldState, action)).to.deep.equal({
            podcastIsPlaying: true,
            trelo: 'biu'
        })
    })

    it('when action type is PAUSE_PODCAST set podcastIsPlaying to false', () => {
        let
            action = {
                type: PAUSE_PODCAST
            },
            oldState = {
                podcastIsPlaying: true,
                trelo: 'biu'
            }

        expect(audio(oldState, action)).to.deep.equal({
            podcastIsPlaying: false,
            trelo: 'biu'
        })
    })

    it('when action type is SET_AUDIO_IS_READY set audioIsReady to true and set podcastIsPlaying to true', () => {

        let
            action = {
                type: SET_AUDIO_IS_READY
            },
            oldState = {
                audioIsReady: false,
                podcastIsPlaying: false,
                trelo: 'biu'
            }

        expect(audio(oldState, action)).to.deep.equal({
            audioIsReady: true,
            podcastIsPlaying: true,
            trelo: 'biu'
        })
    })

    it('when action type is CHANGE_CURRENT_TIME set new currentPosition passed by props', () => {
        let
            action = {
                type: CHANGE_CURRENT_TIME,
                currentPosition: 25
            },
            oldState = {
                currentPosition: 0,
                trelo: 'biu'
            }

        expect(audio(oldState, action)).to.deep.equal({
            currentPosition: 25, 
            trelo: 'biu'
        })
    })

    it('when action type is SET_AUDIO_DURATION set audio duration passed by props', () => {
        let
            action = {
                type: SET_AUDIO_DURATION,
                duration: 25
            },
            oldState = {
                duration: 0,
                trelo: 'biu'
            }

        expect(audio(oldState, action)).to.deep.equal({
            duration: 25, 
            trelo: 'biu'
        })
    })

    it('when the action type is different from described above return the initial state', () => {
        let
            action = undefined,
            oldState = undefined

        expect(audio(oldState, action)).to.deep.equal(initialAudioState)
    })
});
