import {expect} from 'chai'
import {podcasts, initialPodcastsState} from './podcasts'

import {
    SELECT_COLUMNIST,
    SELECT_PODCAST,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST,
    PODCAST_REQUEST_TIME_OUT,
    FETCHED_PODCASTS
} from '../../constants/action-types'


describe('Podcast reducer', function () {

    it('when action type is SELECT_COLUMNIST change the slug of selected columnist and fetch posts', () => {

        let
            action = {
                type: SELECT_COLUMNIST,
                columnist: 'boechat'
            },
            oldState = {
                selectedColumnist: '',
                fetchingPodcasts: false,
                trelo: 'biu'
            }

        expect(podcasts(oldState, action)).to.deep.equal({
            selectedColumnist: 'boechat',
            fetchingPodcasts: true,
            trelo: 'biu'
        })
    })

    it('when action type is SELECT_PODCAST set the downloaded podcasts (selectedPodcast) and fetchingPodcasts to false', () => {
        let
            action = {
                type: SELECT_PODCAST,
                selectedPodcast: {
                    url: 'fjfkladçfasd',
                    duration: 12113213
                }
            },
            oldState = {
                selectedPodcast: {},
                fetchingPodcasts: true,
                trelo: 'biu'
            },
            newState = podcasts(oldState, action),
            selectedPodcast = newState.selectedPodcast

        expect(selectedPodcast.url).to.exist
        expect(selectedPodcast.duration).to.exist
        expect(newState.fetchingPodcasts).to.not.true
    })



    it('when action type is FETCHED_PODCASTS set fetchedPodcasts with downloaded data', () => {
        let
            fetchedPodcasts = [
                {
                    title: 'vkdfasdfas',
                    duration: 1231312323,
                    url: 'www.bbb.com',
                    date: '13/12/2027'
                }
            ],
            oldState = {
                fetchedPodcasts: [],
                fetchingPodcasts: true,
                trelo: 'biu'
            },
            action = {
                type: FETCHED_PODCASTS,
                podcasts: fetchedPodcasts 
            }


        expect(podcasts(oldState, action)).to.deep.equal({
            fetchedPodcasts,
            fetchingPodcasts: false,
            trelo: 'biu'
        })
    })


    it('when action type is ANOUNCE_ERROR_IN_PODCAST_REQUEST dismiss podcast request (fetchingPodcasts=false)', () => {

        let
            action = {
                type: ANOUNCE_ERROR_IN_PODCAST_REQUEST,
                error: 'any'
            },
            oldState = {
                fetchingPodcasts: true,
                trelo: 'biu'
            }

        expect(podcasts(oldState, action)).to.deep.equal({
            fetchingPodcasts: false,
            trelo: 'biu'
        })
    })

    it('when action type is PODCAST_REQUEST_TIME_OUT set the new currentPosition passed in actions', () => {
        let
            action = {
                type: PODCAST_REQUEST_TIME_OUT,
            },
            oldState = {
                fetchingPodcasts: true,
                trelo: 'biu'
            }

        expect(podcasts(oldState, action)).to.deep.equal({
            fetchingPodcasts: false,
            trelo: 'biu'
        })
    })
    it('when the action type is different from described above return the initial state', () => {
        let
            action = undefined,
            oldState = undefined

        expect(podcasts(oldState, action)).to.deep.equal(initialPodcastsState)
    })

}); 
