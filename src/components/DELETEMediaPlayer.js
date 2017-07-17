import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute, Progress, Volume, SeekBar } = controls

class MediaPlayer extends Component {
  render() {
    let audioFile = 'http://traffic.megaphone.fm/GLT7010726975.mp3';
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player 
                src={audioFile}
            />
          </div>
          <div className="media-controls audio-player-wrapper">
            <PlayPause className="circle-media-player circle-media-player__play"/>
            
            <div className="progress-bar">
                <SeekBar className="seek-bar"/>
                {/*<Progress className="file-progress"/>*/}
            </div>
            <div className="volume-contols">
              <MuteUnmute/>
              <Volume className="volume-meter"/>
            </div>
          </div>
        </div>
      </Media>
    )
  }
}

export default MediaPlayer;