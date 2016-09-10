import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_TIME_TRACK,
    SET_AUDIO_DURATION
} from '../../constants/action-types'

export const initialAudioState = {
    podcastIsPlaying: false,
    audioIsReady: false,
    timeTrack: 0,
    duration: null
}

export function audio(state = initialAudioState, action = {}) {
    switch (action.type) {
        case PLAY_PODCAST:
            return Object.assign({}, state, {
                podcastIsPlaying: true
            })

        case SET_AUDIO_DURATION:
            return Object.assign({}, state, {
                duration: action.duration
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