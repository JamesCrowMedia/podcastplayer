import React from 'react';
import FeedListItem from '../display/FeedListItem';

class FeedList extends React.Component {


    render(){
        return(
           <div>
               {this.props.feedList.map((result, index) => {
                    return (
                        <a className="col-xs-12 col-sm-12 col-md-4 col-xl-2 feed-display"
                            id={"search_" + index }
                            target="_blank" rel="noopener noreferrer"
                            onClick={ (event) => {  event.preventDefault();
                                                    this.props.getEpisodes(result._id, '596451ac22ac8e208319f710');
                                                    }
                        }>
                            { FeedListItem(result) }
                        </a>
                        
               )})}
            </div>
        )
    }
}

export default FeedList;