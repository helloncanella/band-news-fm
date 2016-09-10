import React, {PropTypes} from 'react'

class AudioElement extends React.Component {

    _onCanPlay(event){
        let duration = event.target.duration

        this.props.setAudioIsReady()
        this.props.setAudioDuration(duration)
    }

    render(){
        let {url, setAudioIsReady} = this.props

        return <audio 
                    src={url} 
                    onCanPlay={(event)=>{this._onCanPlay.call(this,event)}}
                />
    }
}

// AudioElement.propTypes = {

    

// }

export default AudioElement