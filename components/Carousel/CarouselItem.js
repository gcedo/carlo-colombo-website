import React from 'react';
import cx from 'classnames';

const CarouselItem = ({ imgUri, title, caption, active }) => (
  <div className={cx('item', 'CarouselItem', { active })}>
    <img src={imgUri} alt="" width="940px" height="627" />
    <div className="carousel-caption">
      <h3 className="CarouselItem__title">{title}</h3>
      <p>{caption}</p>
    </div>
  </div>
);

export default CarouselItem;
