import React from 'react';
import FeedListItem from '../display/FeedListItem';

class SearchResults extends React.Component {


    render(){
        return(
           <div>
               {this.props.result}
               {this.props.searchResult.map((result, index) => {
                    return (
                        <a className="col-xs-12 col-sm-12 col-md-4 col-xl-2 feed-display"
                            id={"search_" + index }
                            target="_blank" rel="noopener noreferrer"
                            onClick={ (event) => {  event.preventDefault();
                                                    this.props.getParse(result.feedUrl)}
                        }>
                            { FeedListItem(result) }
                        </a>
               )})}
            </div>
        )
    }
}

export default SearchResults;