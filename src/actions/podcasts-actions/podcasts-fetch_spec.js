import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {fetchPodcasts} from './podcasts-actions'
import nock from 'nock'
import { expect } from 'chai' // You can use any testing library
import fakePodcastXMLResponse from '../../data/fakePodcastXML'
 
import {parseString as convertXml2Json} from 'xml2js'

import bandNewsPodcasts from  '../../helpers/bandNewsPodcasts'

import {
    SELECT_COLUMNIST,
    FETCHED_PODCASTS,
    ANOUNCE_ERROR_IN_PODCAST_REQUEST
} from '../../constants/action-types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => { 
    
    let store;

    function setupFakekServer() {
        nock('https://hellon-proxy.herokuapp.com')
            .get('/')
            .query({
                url: ''
            })
            .reply(404, '')

        nock('https://hellon-proxy.herokuapp.com')
            .get('/')
            .query({
                url: 'www.mockSite.com'
            })
            .reply(200, fakePodcastXMLResponse)
    }

    afterEach(() => {
        nock.cleanAll()
    })

    beforeEach(()=>{
        setupFakekServer()
        store = mockStore({})
    })



    it('creates SELECT_COLUMNIST and FETCHED_PODCASTS when fetchedPodcasts is triggered with successful response', (done) => {

        var xml = fakePodcastXMLResponse
        convertXml2Json(xml, function (err, json) {           
            
            let 
                url = 'www.mockSite.com',
                columnist = 'Ricardo Boechat',
                podcasts = bandNewsPodcasts(json),
                expectedActions = [
                    {
                        type: SELECT_COLUMNIST,
                        columnist
                    },
                    {
                        type: FETCHED_PODCASTS,
                        podcasts
                    }            
                ]


            return store.dispatch(fetchPodcasts(columnist, url))
                .then(() => { // return of async actions
                    expect(store.getActions()).to.deep.equal(expectedActions)
                    done()
                })
            });
    })


    it('action type ANOUNCE_ERROR_IN_PODCAST_REQUEST is created when a there is fetching problems', (done) => {

        var xml = fakePodcastXMLResponse
        convertXml2Json(xml, function (err, json) {          
            
            let 
                url = '',
                columnist = 'Ricardo Boechat',
                expectedActions = [
                    {
                        type: SELECT_COLUMNIST,
                        columnist
                    },
                    {
                        type: ANOUNCE_ERROR_IN_PODCAST_REQUEST,
                        error: `status response: 404`
                    }
                ]


            return store.dispatch(fetchPodcasts(columnist, url))
                .then(() => { // return of async actions
                    expect(store.getActions()).to.deep.equal(expectedActions)
                    done()
                })
            });
    })
    
})
