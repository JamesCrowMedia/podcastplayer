import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import SearchBox from './components/search/SearchBox';
import MainContent from './components/display/MainContent';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchResult: null,
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(searchResult){
    this.setState({
      searchResult: searchResult
    })
  }

  // search(query){
  //     query = query.split(' ').join('+')
  //     if(query !== ''){
  //         const url = 'https://itunes.apple.com/search?media=podcast&limit=20&term='+query;
  //         console.log('Search: ' + query + '/nrul: ' + url)
  //         request.get(url)
  //             .responseType('json')
  //             .buffer(true)
  //             .then((response)=>{
  //                 this.setState({
  //                     resultCount: response,
  //                     searchResult: response.body.results
  //                 })
  //         })
  //     }
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="container">
        <SearchBox updateSearch={this.updateSearch}/>
        </div>
        <MainContent searchResult={ this.state.searchResult } />
        <div className="col-xs-4 col-lg-6" />
        {/*{JSON.stringify(this.state.searchResult)}*/}
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
