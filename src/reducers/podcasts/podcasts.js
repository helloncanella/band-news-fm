import {
    SELECT_COLUMNIST,
    SELECT_PODCAST,
    FETCHED_PODCASTS,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST,
    PODCAST_REQUEST_TIME_OUT,
} from '../../constants/action-types'

export const initialPodcastsState = {
    fetchingPodcasts: false,
    selectedPodcast: '',
    fetchedPodcasts: [],
    selectedColumnist: '',
}

export function podcasts(state = initialPodcastsState, action = {}) {
    switch (action.type) {
        case SELECT_COLUMNIST:
            return Object.assign({}, state, {
                fetchingPodcasts: true,
                selectedColumnist: action.columnist
            })
        case FETCHED_PODCASTS:
            return Object.assign({}, state, {
                fetchedPodcasts: action.podcasts,
                fetchingPodcasts: false
            })

        case SELECT_PODCAST:
            let {url} = action            
            return Object.assign({}, state, {
                selectedPodcast:url   
            })

        case ANOUNCE_ERROR_IN_PODCAST_REQUEST:
        case PODCAST_REQUEST_TIME_OUT:
            return Object.assign({}, state, {
                fetchingPodcasts: false
            })

        default:
            return state
    }
}