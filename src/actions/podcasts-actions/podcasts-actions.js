import xml2json from '../../helpers/xml2json'
import bandNewsPodcasts from  '../../helpers/bandNewsPodcasts'
import fetchPolyfill from 'isomorphic-fetch';


import {
    SELECT_COLUMNIST,
    FETCHED_PODCASTS,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST,
    SELECT_PODCAST,
    PODCAST_REQUEST_TIME_OUT,
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

export function fetchedPodcasts(podcasts) {
    return {
        type: FETCHED_PODCASTS,
        podcasts
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


export function fetchPodcasts(columnist,podcastURL) {

    let 
        url = `https://hellon-proxy.herokuapp.com?url=${podcastURL}`,
        fetch = fetch || fetchPolyfill    

    return dispatch => {
        return fetch(url)
            .then(res => res.text())
            .then(xml => {
                console.log(xml, 'XML')
                // xml2json(xml)
            
            })
            .then(json => {
                let podcasts = bandNewsPodcasts(json)
            })
            .catch(error => console.log(error))
    }
    
}

