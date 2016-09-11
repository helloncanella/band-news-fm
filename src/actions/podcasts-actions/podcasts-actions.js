import bandNewsPodcasts from  '../../helpers/bandNewsPodcasts'
import fetchPolyfill from 'isomorphic-fetch';
import {parseString as convertXml2Json} from 'xml2js'

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

export function selectPodcast(url) {
    return {
        type: SELECT_PODCAST,
        url
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
        dispatch(selectColumnist(columnist))

        return fetch(url)
            .then(res => {
                if(!res.ok){
                    return Promise.reject(res.status)
                }

                return res.text()
            })
            .then(xml => { 
                return new Promise((resolve)=>{
                     convertXml2Json(xml, function (err, json) {

                         resolve(json)
                     })   
                })            
            }) 
            .then(json => {
                let podcasts = bandNewsPodcasts(json)

                dispatch(fetchedPodcasts(podcasts))
            })
            .catch(status => {
                dispatch(anounceErrorInFetch(`status response: ${status}`))
            })
    }
    
}

