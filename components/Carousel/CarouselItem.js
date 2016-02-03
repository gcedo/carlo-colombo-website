import React from 'react';
import cx from 'classnames';

const CarouselItem = ({ imgUri, title, caption, active }) => (
  <div className={cx({ active, item: true })}>
    <img src={imgUri} alt="" />
    <div className="carousel-caption">
      <h3>{title}</h3>
      {<p>{caption}</p>}
    </div>
  </div>
);

export default CarouselItem;
