import AudioControl from './audio-control'
import {shallow} from  'enzyme'
import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {spy} from 'sinon'

chai.use(chaiEnzyme()) // Note the invocation at the end

function wrapper(props){

    let component = shallow(<AudioControl {...props} />)
        
    return {
        props,
        component
    }

}


describe('AudioControls', function(){

    describe('control button', ()=>{

        describe('icon', ()=>{
            
            it('is pause when the state podcastIsPlaying is false', function () {
                let {component} = wrapper({podcastIsPlaying: false})
                
                expect(component.find('.play-icon')).to.exist  
                expect(component.find('.pause-icon')).to.not.exist    
            });
            
            it('is play when the state podcastIsPlaying is true', function () {
                let {component} = wrapper({podcastIsPlaying: true})
                
                expect(component.find('.pause-icon')).to.exist
                expect(component.find('.play-icon')).to.not.exist 

                
            });
        })

        describe('when clicked', ()=>{
            let play, pause;

            beforeEach(()=>{
                 play = spy(), 
                 pause = spy()
            })
            
            it('if podcastIsPlaying is false, should trigger play function', function () {
                let {component} = wrapper({podcastIsPlaying: false, play, pause})
            
                component.find('.icon-button').props().onTouchTap()

                expect(play.called).to.true
                expect(pause.called).to.not.true
            });
            
            it('if podcastIsPlaying is true, should trigger pause function', function () {
                let {component} = wrapper({podcastIsPlaying: true, play, pause})

                component.find('.icon-button').props().onTouchTap()

                expect(pause.called).to.true
                expect(play.called).to.not.true
            });
        })

    })

    describe('spin', ()=>{
        it('appears when audioIsReady is false', function(){
            let 
                {component} = wrapper({audioIsReady: false}),
                spinner = component.find('.spinner') 

            expect(spinner).have.style('display','block')    
        })
        it('not visible when audioIsReady is true', function(){
            let 
                {component} = wrapper({audioIsReady: true}),
                spinner = component.find('.spinner') 

            expect(spinner).have.style('display','none') 
        })
    })

   
    describe('time track', ()=>{
        it('renders current time and duration', ()=>{
            let 
                currentTime = '0:05',
                duration = '1:05:03'
        
           let 
                {component} = wrapper({currentTime, duration}),
                timeTrack = component.find('.time-track') 


           expect(timeTrack.find('.duration')).to.have.text(duration)
           expect(timeTrack.find('.current-time')).to.have.text(currentTime)
        })
    })

    
    describe('Slider', function () {
        it('renders percentage', ()=>{
            let 
                percentage = 0.5,
                {component} = wrapper({percentage}),
                slider = component.find('.slider')

            expect(slider.props().value).to.equal(percentage)
        })

        it('renders percentage', ()=>{
            let 
                onDragStopSpy = spy(),
                {component} = wrapper({onSliderDragStop: onDragStopSpy}),
                      
                slider = component.find('.slider'),

                percentage = 0.1
            
            slider.simulate('dragStop',{
                target: {
                    value: percentage
                }
            })

            expect(onDragStopSpy.calledWith(percentage)).to.true

        })
    });


    describe('audio', function () {
        it('should hold url passed', ()=>{
            let 
                url = 'www.any.com',
                audio = wrapper({url}).component.find('AudioElement')
            
            expect(audio.props().url).to.equal(url)
        })
    });


    

})
