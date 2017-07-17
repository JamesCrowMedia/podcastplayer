import React from 'react';

let FeedDisplay = (SearchResult) => (
  <a
    className="col-xs-6 col-sm-4 col-md-3 col-xl-2 feed-display"
    href={SearchResult.trackViewUrl || SearchResult.collectionViewUrl}
    target="_blank" rel="noopener noreferrer"
  >
    <div className="">
      <img className="img img-thumbnail" width="100%" alt="img" src={SearchResult.artworkUrl100.replace('100x100', '1200x1200')} />
    </div>
    <div className="feed-content block-with-text">
      <div className="header">{SearchResult.trackName || SearchResult.collectionName}</div>
    </div>
  </a>
)

export default FeedDisplay;