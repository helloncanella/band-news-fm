import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/audio-actions/audio-actions';

import AudioControl from '../../components/audio-control/audio-control'

function mapStateToProps(state) {   

    let {
        currentTime,
        duration,
        audioIsReady,
        podcastIsPlaying,
        
    } = state.audio



    let 
        {selectedPodcast} = state.podcasts,
        url = selectedPodcast,
        percentage = duration ? percentage = (currentTime / duration) : 0


    return {
        currentTime,
        duration,
        percentage, 
        audioIsReady,
        podcastIsPlaying,
        url
    };
}

function mapDispatchToProps(dispatch) {
    return {
        pause: () => {
            dispatch(actions.pauseAudio())
        },
        play: () => {
            dispatch(actions.playAudio())
        },
        setAudioIsReady: () => {
            dispatch(actions.setAudioIsReady())
        },
        changeCurrentTime: (currentTime) => {
            dispatch(actions.changeCurrentTime(currentTime))
        },
        onSliderDragStop: (percentage) => {
            dispatch(actions.onSliderDragStop(percentage))
        },
        setAudioDuration: (duration)=>{
            dispatch(actions.setAudioDuration(duration))
        },

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AudioControl);
