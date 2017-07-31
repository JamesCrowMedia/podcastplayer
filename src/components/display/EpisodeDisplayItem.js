import React from 'react';
import Truncate from 'react-truncate';
import striptags from 'striptags';
import moment from 'moment'

let renderDate = (date) => {
     return moment(date).format("hA on MMM Do, YY");
}

let EpisodeDisplayItem = (episode, index, callback) => (
                <div>
                    <div id={"ep_" + index + "a"}
                        className="episode-table-header">
                            <div>                     
                                <strong>
                                    <a target="_blank" rel="noopener noreferrer"
                                        onClick={ (event) => {  event.preventDefault();
                                                                callback(episode.fileUrl || episode.enclosures[0].url);
                                        
                                        }}>
                                    {episode.title}
                                    </a>
                                </strong>
                            </div>
                            <div className="col-xs-4 date-text">
                                { renderDate(episode.published || episode.pubdate || null)}
                            </div>
                    </div>            
                    <div id={"ep_" + index + "b"} 
                            className="table-description">
                        <Truncate lines={3} ellipsis={'...'}>
                            { striptags(episode.description) }
                        </Truncate>
                    </div>
                    
                  </div>  
)

export default EpisodeDisplayItem;