import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_TIME_TRACK
} from '../../constants/action-types'

export const initialAudioState = {
    podcastIsPlaying: false,
    audioIsReady: false,
    timeTrack: 0
}

export function audio(state = initialAudioState, action = {}) {
    switch (action.type) {
        case PLAY_PODCAST:
            return Object.assign({}, state, {
                podcastIsPlaying: true
            })

        case PAUSE_PODCAST:
            return Object.assign({}, state, {
                podcastIsPlaying: false
            })

        case SET_AUDIO_IS_READY:
            return Object.assign({}, state, {
                audioIsReady: true
            })
        case CHANGE_TIME_TRACK:
            return Object.assign({}, state, {
                currentPosition: action.currentPosition
            })

        default:
            return state
    }
}