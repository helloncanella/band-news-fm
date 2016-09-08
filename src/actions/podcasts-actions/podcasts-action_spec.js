import {expect} from 'chai'

import {
    SELECT_COLUMNIST,
    SELECT_PODCAST,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST,
    PODCAST_REQUEST_TIME_OUT
} from '../../constants/action-types'

import {
    selectColumnist,
    selectPodCast,
    anounceErrorInFetch,
    podcastRequestTimeOut
} from './podcasts-actions'
 

describe('Podcasts Actions', () => {   

    describe('selectColumnist', () => {

        it('return type SELECT_COLUMNIST and columnist', function () {
            let columnist = 'Ricardo Boechat'   
            
            expect(selectColumnist(columnist)).to.deep.equal({
                type: SELECT_COLUMNIST,
                columnist
            })
        });

    })

    describe('selectPodCast', () => {
        it('return type SELECT_PODCAST and podcast description', function () {
            let 
                duration = 45365,
                url = 'www.blabla.com',
                podcast = {
                    duration,
                    url
                }

            expect(selectPodCast(podcast)).to.deep.equal({
                type: SELECT_PODCAST,
                podcast
            })
        });
    })

    describe('anounceErrorInFetch', () => {
        let error = 'errorInformation'

        it('return type ANOUNCE_ERROR_IN_PODCAST_REQUEST with respective error', function () {
            expect(anounceErrorInFetch(error)).to.deep.equal({
                type: ANOUNCE_ERROR_IN_PODCAST_REQUEST,
                error
            })
        });
    })

    describe('podcastRequestTimeOut', () => {
        it('return type PODCAST_REQUEST_TIME_OUT', function () {
            expect(podcastRequestTimeOut()).to.deep.equal({
                type: PODCAST_REQUEST_TIME_OUT,
            })
        });
    })   

})