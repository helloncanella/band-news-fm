import React, {PropTypes} from 'react'
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline'
import PauseIcon from 'material-ui/svg-icons/av/pause-circle-outline'
import Spinner from 'material-ui/svg-icons/av/loop'
import {pink500} from 'material-ui/styles/colors'
import {Slider, IconButton} from 'material-ui'

const style = {
    audioControl: {
        color: pink500,
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        padding:'0 5%',
    },
    svg:{
        height: '40vw',
        width: '40vw',
        marginTop: '10vh',
        fill: pink500
    },
    currentTime:{
        fontSize: '1.8rem',
        fontFamily: 'roboto',
    },
    slider:{
        width:'100%',
        color: pink500,
        margin:'0',
        marginBottom:'-45px'        
    }
}


class AudioControl extends React.Component {
    render(){
        let {isPlaying, url, play, pause, audioIsReady, currentTime, duration, percentage, onSliderDragStop} = this.props
        
        const 
            iconButtonFunction = isPlaying ? pause : play
            ,spinnerStyle = {display: audioIsReady ? 'none' : 'block'}
             

        const 
            icon = isPlaying ?  <PauseIcon className="icon pause-icon" style={style.svg}/> : <PlayIcon className="icon play-icon" style={style.svg}/>, 

            slider = <Slider style={style.slider} className='slider' value={percentage} onDragStop={onSliderDragStop}/>,
           
            timeTrack = (
                <span className="time-track" style={style.currentTime}>
                    <span className="current-time">{currentTime}</span> /
                    <span className="duration">{duration}</span>  
                </span>
            ),
            
            audio = (<audio src={url} autoplay></audio>),

            spinner = (<div className="spinner" style={spinnerStyle}></div>),    

            iconButton = (
                <IconButton className='icon-button' onTouchTap={iconButtonFunction}>
                    {icon}
                </IconButton>
            )

        return (
            <div className="audio-control grid" style={style.audioControl}>
                {slider}
                {timeTrack}
                {iconButton}
                {audio}                
                {spinner}
            </div>
        )
    }
}

AudioControl.propTypes = {
    currentTime : PropTypes.string.isRequired,
    duration : PropTypes.string.isRequired,
    percentage : PropTypes.number.isRequired, 
    audioIsReady : PropTypes.bool.isRequired,
    isPlaying : PropTypes.bool.isRequired,
    pause : PropTypes.func.isRequired, 
    play : PropTypes.func.isRequired, 
    setAudioIsReady : PropTypes.func.isRequired, 
    changeCurrentTime : PropTypes.func.isRequired,
    onSliderDragStop : PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

export default AudioControl