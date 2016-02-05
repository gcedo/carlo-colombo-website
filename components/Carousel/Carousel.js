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
              title={<span>Una nuova vita, è in te.</span>}
            />
            <CarouselItem
              imgUri="img/carousel/fiori_2.jpg"
              title={
                <p>
                  Le parole, non servivano,<br/>
                  sentivamo i battiti dei nostri cuori.
                </p>
              }
            />
            <CarouselItem
              imgUri="img/carousel/fiori_3.jpg"
              title={
                <p>
                  Un sole,<br/>
                  che riesce ancora a scaldare.
                </p>
              }
            />
            <CarouselItem
              imgUri="img/carousel/fiori_4.jpg"
              title={
                <p>
                  Una finestra sul cortile,<br/>
                  il tuo sguardo si riflette,<br/>
                  nel verde dell’erica.
                </p>
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
