import React from 'react';
import { Button, Form } from 'react-bootstrap';
import FeedDisplay from '../display/FeedDisplay';
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
                    // this.setState({
                    //     resultCount: response,
                    //     searchResult: response.body.results
                    // })
                    this.props.updateSearch(response.body.results)
            })
        }
    }

    render(){
        return(
            <Form inline>
                <input className="form-control search-box"
                        ref="searchBox" 
                        type="text" 
                        onChange={ (event) => {
                            event.preventDefault();
                            } 
                }/>
                <Button bsStyle="default"
                        onClick={ (event) => {
                            event.preventDefault();
                            this.updateSearchTerm()} 
                }>
                    Search
                </Button>
               {/*{this.state.searchResult.map((result, index) => {
                    return FeedDisplay(result)
               })}*/}
            </Form>
        )
    }
}

export default SearchBox;