import React, {PropTypes} from 'react'
import $ from 'jquery'

class AudioElement extends React.Component {

    _onCanPlay(event) {
        let duration = event.target.duration
        this.props.setAudioDuration(duration)
        this.props.setAudioIsReady()
       event.target.play()
    }

    _playAudio() {
        this.audio.play()
    }

    _pauseAudio() {
        this.audio.pause()
    }

    _changeCurrentTime(newCurrentTime) {
        this.audio.currentTime = newCurrentTime
    }

    _onTimeUpdate(event) {
        let currentTime = event.target.currentTime
        
        this.props.changeCurrentTime(currentTime)

    }

    componentDidMount() {
        this.audio = $('audio')[0]
    }

    componentWillReceiveProps(newProps) {

        if (newProps.podcastIsPlaying !== this.props.podcastIsPlaying) {
            if (newProps.podcastIsPlaying)
                this._playAudio()
            else
                this._pauseAudio()
        }

        let            
            differenceCurrentTime = Math.abs(newProps.currentTime - this.props.currentTime),
            
            isExternalChange = differenceCurrentTime > 2


        if (isExternalChange) {
            let {currentTime} = newProps

            this._changeCurrentTime(currentTime)  
        }


    }

    render() {
        let {url, setAudioIsReady, podcastIsPlaying, changeCurrentTime, currentTime} = this.props

        return <audio
            
            src={url}            
            onCanPlay={(event) => { this._onCanPlay.call(this, event) } }
            onTimeUpdate={(event) => { this._onTimeUpdate.call(this, event) } }
            />
    }
}

AudioElement.propTypes = {
    url: PropTypes.string.isRequired,
    setAudioIsReady: PropTypes.func.isRequired,
    currentTime: PropTypes.number.isRequired,
    podcastIsPlaying: PropTypes.bool.isRequired,
    changeCurrentTime: PropTypes.func.isRequired
}

export default AudioElement