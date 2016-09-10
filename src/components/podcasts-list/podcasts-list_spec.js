import PodcastsList from './podcasts-list'
import {shallow} from  'enzyme'
import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {spy} from 'sinon'

chai.use(chaiEnzyme()) // Note the invocation at the end

function wrapper(props){

    let component = shallow(<PodcastsList {...props} />)        

    return {
        props,
        component
    }

}


describe('PodcastsList', function(){
    it('renders the same number of items of the podcasts passed by props', ()=>{
        let 
            podcasts = [1,2,3,4,5,6],
            list = wrapper({podcasts}).component

        expect(list).to.have.exactly(podcasts.length).descendants('.list-item')

    })

    describe('podcast item', ()=>{
        let podcasts

        beforeEach(()=>{
            podcasts = [
                {
                    title: 'jdkfalsdçfa',
                    pubDate: 'jçfsdkalksdjçfa',
                    url: 'dljfçadslkafjd' 
                },
                {
                    title: 'afsdfadf',
                    pubDate: 'fasdfasdfad',
                    url: 'jfçakdça' 
                },
            ]
        })
        
        it('renders the title and pubDate of the podcast', ()=>{
            let listItens = wrapper({podcasts}).component.find('.list-item')

            listItens.forEach((item, index) => {

                let 
                    {primaryText, secondaryText} = item.props(),
                    {title, pubDate} = podcasts[index]

                expect(primaryText).to.equal(title)
                expect(secondaryText).to.equal(pubDate)
            })
        })
        
        it('when clicked load the selected audio', ()=>{

            let 
                selectPodcast = spy(),
                listItens = wrapper({podcasts, selectPodcast}).component.find('.list-item')

            listItens.forEach((item, index)=>{
                let {url} = podcasts[index]

                item.props().onTouchTap()

                expect(selectPodcast.calledWith(url)).to.true
            })    
        })
    })
})
