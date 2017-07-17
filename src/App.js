import React, { Component } from 'react';
import './App.css';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import SearchBox from './components/search/SearchBox';
import MainContent from './components/display/MainContent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
        <SearchBox />
        </div>
        <footer className="sticky-footer">
          <div className="audio-player-wrapper">
          <AudioPlayer src="http://traffic.megaphone.fm/GLT7010726975.mp3"/>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
