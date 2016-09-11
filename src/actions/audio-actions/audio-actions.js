import {
    PLAY_PODCAST,
    PAUSE_PODCAST,
    SET_AUDIO_IS_READY,
    ANOUNCE_ERROR_IN_AUDIO_DOWNLOAD,
    CHANGE_CURRENT_TIME,
    SET_AUDIO_DURATION
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


export function setAudioDuration(duration) {
    return {
        type: SET_AUDIO_DURATION,
        duration
    }
}


export function setAudioIsReady() {
    return {
        type: SET_AUDIO_IS_READY,
    }
}
export function changeCurrentTime(currentTime) {
    return {
        type: CHANGE_CURRENT_TIME,
        currentTime
    }
}

export function onSliderDragStop(percentage){
   return (dispatch,getState) =>{
       let 
            {duration} = getState(),
            newCurrentTime = percentage * duration

       dispatch(changeCurrentTime(newCurrentTime))
   }      
}


