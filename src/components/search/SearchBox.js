import React from 'react';
import { Button, Form } from 'react-bootstrap';
import request from 'superagent';
import FeedDisplay from '../display/FeedDisplay';

class SearchBox extends React.Component {
    constructor(){
        super();
        this.state = {
            searchResult: [],
            searchBox: ''
        }
    }

    componentDidMount(){
        
    }

    updateSearch(){
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
                    this.setState({
                        resultCount: response,
                        searchResult: response.body.results
                    })
            })
        }
    }

    onClickSearch(searchBox){
        this.setState({searchBox: searchBox }, () => {
            console.log(searchBox)
        });
    
    }

    render(){
        return(
            <Form inline>
                <input className="form-control search-box"
                        ref="searchBox" 
                        type="text" 
                />
                <Button bsStyle="default"
                        onClick={ (event) => {
                            event.preventDefault();
                            this.updateSearch()} 
                }>
                    Search
                </Button>
               {this.state.searchResult.map((result, index) => {
                    return FeedDisplay(result)
               })}
            </Form>
        )
    }
}

export default SearchBox;