import React from 'react';

let FeedDisplay = (SearchResult) => (
  <a
    className="ui card"
    href={SearchResult.trackViewUrl || SearchResult.collectionViewUrl}
    target="_blank" rel="noopener noreferrer"
  >
    <div className="image">
      <img alt="img" width="100px" src={SearchResult.artworkUrl100.replace('100x100', '1200x1200')} />
    </div>
    <div className="content">
      <div className="header">{SearchResult.trackName || SearchResult.collectionName}</div>
    </div>
  </a>
)

export default FeedDisplay;