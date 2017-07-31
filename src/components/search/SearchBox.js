import React from 'react';
import { Button, Form } from 'react-bootstrap';
import request from 'superagent';

class SearchBox extends React.Component {
    constructor(){
        super();
        this.state = {
            searchResult: [],
            searchBox: ''
        }
    }

    updateSearchTerm(){
        this.search(this.refs.searchBox.value);
    }

    search(query){
        query = query.split(' ').join('+')
        if(query !== ''){
            const url = 'https://itunes.apple.com/search?media=podcast&limit=20&term='+query;
            console.log('Search: ' + query + '/nrul: ' + url)
            request.get(url)
                .responseType('json')
                .buffer(true)
                .then((response)=>{
                    this.props.updateSearch(response.body.results)
            })
        }
    }

    render(){
        return(
            <form className={ this.props.className }>
                <input className="form-control search-box"
                        ref="searchBox" 
                        type="text" 
                        onKeyPress={ (event) => {
                            if (event.which === 13 /* Enter */) {
                                this.updateSearchTerm();
                                event.preventDefault();
                                }
                            } 
                        }
                        onChange={ (event) => {
                            event.preventDefault();
                            if(this.refs.searchBox.value.length > 4){
                                this.updateSearchTerm()
                                }
                            } 
                }/>
                <button className="btn btn-default"
                        type="button"
                        onClick={ (event) => {
                            event.preventDefault();
                            this.updateSearchTerm()
                            }} 
                        onKeyPress={ (event) => {
                             if (event.which === 13 /* Enter */) {
                                this.updateSearchTerm();
                                event.preventDefault();
                                }
                            } 
                }>
                    Search
                </button>
               {/*{this.state.searchResult.map((result, index) => {
                    return FeedDisplay(result)
               })}*/}
            </form>
        )
    }
}

export default SearchBox;