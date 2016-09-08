import {
    SELECT_COLUMNIST,
    SELECT_PODCAST,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST,
    PODCAST_REQUEST_TIME_OUT
} from '../../constants/action-types'

export function selectColumnist(columnist) {
    return {
        type: SELECT_COLUMNIST,
        columnist
    }
}
export function selectPodCast(podcast) {
    return {
        type: SELECT_PODCAST,
        podcast
    }
}

export function anounceErrorInFetch(error) {
    return {
        type: ANOUNCE_ERROR_IN_PODCAST_REQUEST,
        error
    }
}
export function podcastRequestTimeOut() {
    return {
        type: PODCAST_REQUEST_TIME_OUT,
    }
}


