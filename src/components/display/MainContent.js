import React from 'react';
import SearchResults from '../search/SearchResults';
import FeedList from '../display/FeedList';

class MainContent extends React.Component {
    componentDidMount() {
        if(this.props.mainContent=="start")
        this.props.getFeeds("596451ac22ac8e208319f710")
    }

    render(){        
        let searchResult = this.props.searchResult || '';
        let feedList = this.props.feedList || '';
        if(this.props.mainContent=="start"){
            return (
                <div className={this.props.className}>
                    Fetching feed info
                </div>
            )
        } else if( this.props.mainContent==="search" && (searchResult[0] !== null || searchResult !== '')) {
            return(
                <div className={this.props.className}>
                <h4>
                    Search Results 
                    <button onClick={ (event) => {  event.preventDefault();
                                                    this.props.displayFeedList()}
                                        }>
                        X
                    </button>    
                </h4>

                <SearchResults searchResult={searchResult} 
                                getParse={this.props.getParse}
                />
                </div>
            )

        } else if( this.props.mainContent==="feed" && (feedList[0] !== null || feedList !== '')){
            return (
                <div className={this.props.className}> 
                    <h4>Feeds</h4>
                        <FeedList   feedList={ feedList }
                                    getEpisodes={ this.props.getEpisodes }/>
                    <br/>
                </div>
            )
        } else {
            return (
                <div className={this.props.className}>
                    No content to display
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            )
        }
    }
}

export default MainContent;