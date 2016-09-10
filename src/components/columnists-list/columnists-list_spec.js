import ColuministsList from './columnists-list'
import {shallow} from  'enzyme'
import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {spy} from 'sinon'

chai.use(chaiEnzyme()) // Note the invocation at the end

function wrapper(props){

    let {
        columnists = [],
        fetchPodcasts= ()=>{}        
    } = props,

        component = shallow(<ColuministsList {...props} />)        

    return {
        props,
        component
    }

}


describe('ColumnistsList', function(){

    describe('list', ()=>{
        it('should render the same number of colunists in the \'columnists\' prop',()=>{
            let 
                columnists = ['1','2','3','4'],
                List = wrapper({columnists}).component

            expect(List).to.have.exactly(columnists.length).descendants('.list-item')
        })
    })

    describe('list item', ()=>{
        
        it(' when clicked should triggers the function fetchPodcasts with name and url of the columnist ',()=>{
                
            let 
                columnists = [
                    {
                        name:'dfjaçdf',
                        url: 'www.teco.com',
                        slug: 'jkdlfa',
                        image: 'fjkdsa'
                    },
                    {
                        name:'dafddad',
                        url: 'www.te.com',
                        slug: 'sfhsf',
                        image: 'fjkfasddsa'
                    },
                ],
                fetchPodcasts = spy(),    
                
                listItens = wrapper({columnists, fetchPodcasts}).component.find('.list-item')

                columnists.forEach((columnist, index)=>{
                    let {name, url} = columnist

                    listItens.get(index).props.onTouchTap()
                    expect(fetchPodcasts.calledWith(name, url)).to.true
                })
        })

        describe('when clicked', ()=>{
           
        })

    })


    

})
