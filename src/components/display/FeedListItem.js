import React from 'react';

let FeedListItem = (feed) => (

    <div className="">
      <img className="img img-thumbnail " width="100%" alt="img" src={feed.imgURL || feed.artworkUrl100.replace('100x100', '1200x1200')} />
    </div>
)

export default FeedListItem;