import React from 'react'
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline'
import {pink500} from 'material-ui/styles/colors'
import {Slider} from 'material-ui'

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

const AudioControl = () => (
    <div className="audio-control grid" style={style.audioControl}>
        <Slider style={style.slider}/>
        <span className="time-track" style={style.currentTime}>
            0:22 / 15:35
        </span>
        <audio src=""></audio>
        <PlayIcon className="play-icon" style={style.svg}/>
    </div>
)

export default AudioControl