import React from 'react';
import SearchResults from '../search/SearchResults';

class MainContent extends React.Component {


    render(){        
        let searchResult = this.props.searchResult || '';

        if(searchResult[0] != null || searchResult != '') {
            return(
                <div className="container main-content col-xs-8 col-lg-6">
                <SearchResults searchResult={searchResult} />
                </div>
            )

        } else {
            return (
                <div>No Results</div>
            )
        }
    }
}

export default MainContent;