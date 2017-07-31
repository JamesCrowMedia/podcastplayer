
import React from 'react';
import EpisodeDisplayItem from '../display/EpisodeDisplayItem';

class FeedDisplay extends React.Component {
    
    subscribeBTN = (feedData, subscribe, unsubscribe) => {     

        if(feedData.feed._id){
            return(
            <button className={"btn btn-primary" + this.props.disabled}
                    disabled={this.props.disabled}
                    onClick={ (event) => {  event.preventDefault();
                                            console.log('subscribe clicked')
                                            unsubscribe(feedData.feed._id, '596451ac22ac8e208319f710')
                                            }
                        }>
                Unsubscribe 
            </button>
            )
            
       } else {
           return(
            <button className={"btn btn-primary" + this.props.disabled}
                    disabled={this.props.disabled}
                    onClick={ (event) => {  event.preventDefault();
                                            console.log('subscribe clicked')
                                            subscribe(feedData.feed.xmlurl || feedData.feed.xmlUrl, '596451ac22ac8e208319f710')
                                            }
                        }>
                Subscribe
            </button>
           )
       }
       
        
        }
    render(){
        if(this.props.feedData){
            return(
                <div className={this.props.className}>
                    <div className="contianer">
                        <div className="col-xs-4 col-xs-offset-0">
                            <img className="img img-thumbnail" width="100%" alt="img" src={this.props.feedData.feed.imgURL || this.props.feedData.feed.image.url} /> 
                        </div>
                        { this.subscribeBTN(this.props.feedData, this.props.subscribe, this.props.unsubscribe) }
                        <dl className="col-xs-8 col-xs-offset-0 list-unstyled list-inline text-left">
                            <dt>{this.props.feedData.feed.title}</dt>
                            <dd>{ this.props.feedData.feed.author || this.props.feedData.feed.owner.name}</dd>
                            <dd><a href={this.props.feedData.feed.siteLink || this.props.feedData.feed.link}>
                                Website
                                </a>
                            </dd>
                            <dd>{this.props.feedData.feed.description.long || this.props.feedData.feed.description}</dd>
                        </dl>
                    </div>
                    <div className="contaner table text-left">
                        {this.props.feedData.episodes.map((episode, index) => {
                            return (
                                <div id={"episode_" + index }
                                    className="col-xs-12"
                                    >
                                    { EpisodeDisplayItem(episode.episode || episode, index, this.props.changeEpisode)}
                                </div>
                                )
                            })
                        }
                    </div>
                    <p>{JSON.stringify(this.props.feedData.title)}</p>
                </div>
            )
        } else {
            return (
                <div className={this.props.className}>
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

export default FeedDisplay;