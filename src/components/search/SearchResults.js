import React from 'react';
import FeedDisplay from '../display/FeedDisplay';

class SearchResults extends React.Component {
    render(){
        return(
            <div className="container">
               {this.state.searchResult.map((result, index) => {
                    return FeedDisplay(result)
               })}
            </div>
        )
    }
}

export default SearchResults;