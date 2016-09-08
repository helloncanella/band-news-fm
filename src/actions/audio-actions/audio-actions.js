import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_TIME_TRACK
} from '../../constants/action-types'

export function playAudio() {
    return {
        type: PLAY_PODCAST
    }
}
export function pauseAudio() {
    return {
        type: PAUSE_PODCAST
    }
}

export function audioError(error) {
    return {
        type: ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
        error
    }
}
export function setAudioIsReady() {
    return {
        type: SET_AUDIO_IS_READY,
    }
}
export function changeTimeTrack(currentTime) {
    return {
        type: CHANGE_TIME_TRACK,
        currentTime
    }
}


