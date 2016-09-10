import AudioControl from './audio-control'
import {expect} from 'chai'
import {shallow} from  'enzyme'
import React from 'react'

// function setup(currentTime, pause, play, changeTimeTrack, setAudioIsReady, setAudioDuration){

//     let 
//         props = {
//             currentTime, 
//             pause, 
//             play, 
//             changeTimeTrack, 
//             setAudioIsReady, 
//             setAudioDuration
//         },

//         component = shallow(<AudioControl {...props} />),
        

//     return {
//         props,
//         component
//     }

// }


describe('AudioControls', function(){

    describe('control button', ()=>{

        describe('icon', ()=>{
            
            it('is pause when the state isPlaying is false', function () {
                
            });
            
            it('is play when the state isPlaying is true', function () {
                
            });
        })

        describe('when clicked', ()=>{
            
            it('if paused, should trigger play function', function () {
                
            });
            
            it('if playing, should trigger pause function', function () {
                
            });
        })

    })

    describe('spin', ()=>{
        it('if the audio isn\'t ready spinner should spin', function(){

        })
        it('should pause when playing', function(){
            
        })
    })
    

})
