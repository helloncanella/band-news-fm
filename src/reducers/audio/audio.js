import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_CURRENT_TIME,
    SET_AUDIO_DURATION,
    SELECT_PODCAST
} from '../../constants/action-types'



export const initialAudioState = {
    podcastIsPlaying: false,
    audioIsReady: false,
    currentTime: 0,
    duration: null
}

export function audio(state = initialAudioState, action = {}) {
    switch (action.type) {
        case PLAY_PODCAST:
            return Object.assign({}, state, {
                podcastIsPlaying: true
            })

        case SELECT_PODCAST:
            return Object.assign({}, state, {
                podcastIsPlaying: false,
                audioIsReady: false 
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
                audioIsReady: true,
                podcastIsPlaying: true
            })
        case CHANGE_CURRENT_TIME:
            return Object.assign({}, state, {
                currentTime: action.currentTime
            })

        default:
            return state
    }
}