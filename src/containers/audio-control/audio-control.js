import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/audio-actions/audio-actions';

import AudioControl from '../../components/audio-control/audio-control'

function mapStateToProps(state) {

    let {
        currentTime, 
        duration, 
        percentage,
        audioIsReady, 
        isPlaying, 
        url,
    } = state

    return {
        currentTime, 
        duration, 
        percentage,
        audioIsReady, 
        isPlaying, 
        url        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pause: () =>{
            dispatch(actions.pauseAudio())
        },
        play:()=>{
            dispatch(actions.playAudio())
        },
        setAudioIsReady:()=>{
            dispatch(actions.setAudioIsReady())
        },
        changeCurrentTime: ()=>{},
        onSliderDragStop: () =>{}
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioControl);
