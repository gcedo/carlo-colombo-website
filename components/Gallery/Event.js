import React from 'react';
import Thumbnail from './Thumbnail';
import Video from './Video.js';
import { PhotoSwipeGallery } from 'react-photoswipe';

const Event = ({ title, items, description, video }) => (
  <div className="row">
    <div className="col-md-12">
      <h3>{title}</h3>
      <hr style={{ marginTop: 0 }} />
      <div className="row">
        <div className="col-md-8">
          { video && <Video uri={video} /> }
          <PhotoSwipeGallery
            items={items}
            thumbnailContent={Event.getThumbnailContent}
          />
        </div>
        <div className="col-md-4">
          <h4 style={{ marginTop: 0 }}>{description.title}</h4>
          <p className="text-justify">{description.body}</p>
        </div>
      </div>
    </div>
  </div>
);

Event.getThumbnailContent = (item) => <Thumbnail src={item.thumbnail} />;

Event.defaultProps = {
  description: {},
  imagesUris: [],
};

export default Event;
