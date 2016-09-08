import {expect} from 'chai'
import {shallow} from 'enzyme'
import {BandNews} from './band-news'
import React from 'react'

describe('BandNews View', function () {

  let setup = (tabsComponent, appBarTitle) => {
  
    return shallow(<BandNews tabs={tabsComponent} titleAppBar={appBarTitle}/>)
  }

  it('renders componets passed to props in tabs', () => {
 
    let TabsComponents = [
      {
        component: <div className='Maria'></div>,
        icon: <div className='icon1'></div>
      }, {
        component: <div className='Antonio'></div>,
        icon: <div className='icon1'></div>
      }
    ] 

    let bandNews = setup(TabsComponents, '')

    expect(bandNews.find('.Maria')).to.length(1)
    expect(bandNews.find('.Antonio')).to.length(1)

  })
 
  it('renders AppBar with passed title to props', () => {
    let title = 'lero'
    var appBar = setup([],title).find('AppBar')

    expect(appBar.props().title).to.equal(title)

  })
}); 
