import React from 'react';
import SearchResults from '../search/SearchResults';

class MainContent extends React.Component {
    render(){        
        if(this.state.searchResult != null) {
            return(
                <SearchResults />
            )

        } else {
            return (
                <div></div>
            )
        }
    }
}

export default MainContent;