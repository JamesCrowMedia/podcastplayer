
import React, { Component, PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'
import { Media, Player, controls, utils } from 'react-media-player'
import PlayPause from './PlayPause'
import MuteUnmute from './MuteUnmute'

const { CurrentTime, Progress, SeekBar, Duration, Volume, Fullscreen } = controls
const { formatTime } = utils

class AudioPlayer extends Component {

  render() {
    return (
      <Media>
        <div className="audio-player-wrapper">
          <Player
            ref={c => this._player = c}
            src={this.props.src}
            useAudioObject
          />
          <div className="media-controls audio-player-wrapper">
            <PlayPause className="media-control media-control--play-pause media-button"/>
            <CurrentTime className="media-control media-control--current-time"/>
            <SeekBar className="media-control media-control--volume-range"/>
            <Duration className="media-control media-control--duration"/>
            <MuteUnmute className="media-control media-control--mute-unmute media-button"/>
            <Volume className="media-control media-control--volume"/>
          </div>
        </div>
      </Media>
    )
  }
}

export default AudioPlayer