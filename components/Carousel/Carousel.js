import React from 'react';
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
  render() {
    return (
      <div className="container hidden-xs">
        <div id="works-carousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#works-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#works-carousel" data-slide-to="1"></li>
            <li data-target="#works-carousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <CarouselItem
              active
              imgUri="img/carousel/casa_in_collina.jpg"
              title="La nostra casa in collina"
            />
            <CarouselItem
              imgUri="img/carousel/IMG_2597.png"
              title="Il sogno spezzato"
            />
            <CarouselItem
              imgUri="img/carousel/fiori.jpg"
              title="La nostra casa in collina"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
