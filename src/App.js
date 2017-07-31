import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import AudioPlayer from './components/audioPlayer/AudioPlayer';
import SearchBox from './components/search/SearchBox';
import MainContent from './components/display/MainContent';
import FeedDisplay from './components/feeds/FeedDisplay';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      mainContent: "start",
      searchResult: null,
      feedList: null,
      feedData: null,
      currentEpisode: null
    }
    this.updateSearch = this.updateSearch.bind(this)
  }
  // Change State
  updateSearch = (searchResult) => {
    this.setState({
      mainContent: "search",
      searchResult: searchResult
    })
  }

  displayFeedList = (response) => {
    this.setState({
      mainContent: "feed",
      feedList: response || this.state.feedList
    })
  }

  displayFeed = (response) => {
    this.setState({
      feedData: response
    })
  }

  changeEpisode = (episode) => {
    console.log("Episode passed in: " + episode )
    this.setState({
      currentEpisode: episode
    })
  }

  // Get data
  getParse = (feedURL) => {
    return fetch('http://localhost:3000/v1/parse', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "feedURL": feedURL
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.displayFeed(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getFeeds = (userId) => {
    return fetch('http://localhost:3000/v1/feeds', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userId": userId
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.displayFeedList(responseJson.feeds)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  getEpisodes = (feedId, userId) => {
    return fetch('http://localhost:3000/v1/feeds/'+feedId, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userId": userId
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.displayFeed(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  subscribe = (feedURL, userId) => {
    console.log('subscribe method')
    return fetch('http://localhost:3000/v1/feeds/subscribe', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userId": userId,
        "feedURL": feedURL
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.messageType === 'success'){
          console.log('subscribe response')
          this.getFeeds(userId);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  unsubscribe = (feedId, userId) => {
    console.log('subscribe method')
    return fetch('http://localhost:3000/v1/feeds/unsubscribe/'+ feedId, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userId": userId
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        if(responseJson.messageType === 'success'){
          console.log('subscribe response')
          this.getFeeds(userId);
          this.setState({
            feedData: null
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Podcatcher</h1>
        </header>
        <div className="container-fluid sub-header vert-center">
          <SearchBox className="col-xs-4 vert-center form-inline"
                      updateSearch={this.updateSearch}/>
          <div className="vert-center-item col-xs-8">
            Logged in as (Username)
          </div>
        </div>
        <div className="contianer col-xs-12">
          <MainContent  className="container main-content col-xs-4 col-lg-6"
                        mainContent={ this.state.mainContent }
                        searchResult={ this.state.searchResult }
                        feedList={ this.state.feedList }
                        displayFeed={ this.state.feedData }

                        getEpisodes={this.getEpisodes}
                        displayFeedList={this.displayFeedList}
                        getParse={ this.getParse }
                        getFeeds={ this.getFeeds }
                        />
          <FeedDisplay className="col-xs-8 col-lg-6 main-content" 
                        feedData={ this.state.feedData }
                        subscribe={ this.subscribe }
                        unsubscribe={ this.unsubscribe }
                        disabled={''}

                        changeEpisode={ this.changeEpisode }
                      />
        </div>
        <footer className="sticky-footer">
          <div className="audio-player-wrapper">
          <AudioPlayer src={this.state.currentEpisode}/>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

