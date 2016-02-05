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
            <li data-target="#works-carousel" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <CarouselItem
              active
              imgUri="img/carousel/fiori.jpg"
              title="Rimanevamo sospesi"
            />
            <CarouselItem
              imgUri="img/carousel/fiori_2.jpg"
              title="in un timido, lieve silenzio"
            />
            <CarouselItem
              imgUri="img/carousel/fiori_3.jpg"
              title="le parole non servivano"
            />
            <CarouselItem
              imgUri="img/carousel/fiori_4.jpg"
              title="sentivamo i battiti dei nostri cuori."
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
