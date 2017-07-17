import React from 'react';
import FeedDisplay from '../display/FeedDisplay';

class SearchResults extends React.Component {


    render(){
        return(
           <div>
               {this.props.result}
               {this.props.searchResult.map((result, index) => {
                    return FeedDisplay(result)
               })}
            </div>
        )
    }
}

export default SearchResults;