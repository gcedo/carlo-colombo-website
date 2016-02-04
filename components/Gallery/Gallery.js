import React, { PropTypes as T } from 'react';
import Event from './Event';

class Gallery extends React.Component {

  render() {
    const { events } = this.props;

    return (
      <div className="container">
        {
          events.map((event, index) =>
            <Event
              key={index}
              title={event.title}
              description={event.description}
              items={event.items}
              video={event.video}
            />
          )
        }
      </div>
    );
  }
}

Gallery.propTypes = {
  events: T.arrayOf(T.shape({
    title: T.string,
    description: T.shape({
      title: T.string,
      body: T.string,
    }),
    imagesUris: T.arrayOf(T.shape({
      big: T.string,
      small: T.string,
    })),
  })),
};

Gallery.defaultProps = {
  events: [
    {
      title: 'Passepartout en hiver',
      description: {
        title: 'Asti, 17 Gennaio 2016',
        body: 'Per il nono anno consecutivo eccoci all’appuntamento con “Passepartout en hiver”, ciclo di incontri organizzato dallla Biblioteca Astense “Giorgio Faletti” e dalla CNA di Asti. Quest\'anno la rassegna  si è aperta con il libro di Carlo Colombo “Il sogno spezzato”, un racconto sospeso tra le colline astigiane ed il cielo. È la storia di Enrico Cammarota Adorno il cui sogno si spezzò assieme alla vita, all’imbrunire di un sabato di inizio dicembre del 1910, ma che ebbe parte nella  realizzazione del più grande sogno collettivo che gli uomini coltivavano da sempre: volare. La presentazione del volume, condotta dal giornalista Vanni Cornero, è stata preceduta dalla proiezione di un filmato che ripercorre gli albori dell’aviazione in Italia, partendo dal primo volo di Wilbur Wright a Centocelle.',
      },
      video: 'https://www.youtube-nocookie.com/embed/tpa-SEShuE8?rel=0',
      items: [
        {
          src: 'img/gallery/passepartoutenhiver/1.png',
          thumbnail: 'img/gallery/passepartoutenhiver/thumbs/1.png',
          w: 1200,
          h: 800,
          title: 'Discorso d\'apertura della manifestazione',
        },
        {
          src: 'img/gallery/passepartoutenhiver/2.png',
          thumbnail: 'img/gallery/passepartoutenhiver/thumbs/2.png',
          w: 1200,
          h: 800,
          title: 'Vanni Cornero intervista Carlo Colombo',
        },
        {
          src: 'img/gallery/passepartoutenhiver/4.png',
          thumbnail: 'img/gallery/passepartoutenhiver/thumbs/4.png',
          w: 1200,
          h: 800,
          title: 'Vanni Cornero intervista Carlo Colombo',
        },
      ],
    },
    {
      title: 'Premio letterario "Ettore Ottaviano"',
      description: {
        title: 'Rocca d\'Arazzo, 12 Luglio 2015',
        body: 'La serata finale della sedicesima edizione del Premio Letterario “Ettore Ottaviano”, svoltasi a Santa Caterina di Rocca d’Arazzo, ha dedicato un’anteprima al libro “ Il sogno spezzato” di Carlo Colombo, che ripercorre le vicende dell’aviatore  Enrico Cammarota Adorno, rocchese e pioniere mondiale del volo. Più di duecento persone hanno affollato la piazza di questo angolo di mondo adagiato tra colline e vallate di indiscussa bellezza, incuriosite dalla storia di un loro illustre concittadino che il tempo aveva contribuito a relegare nell’oblio.  Durante la serata il pittore Claudio Rabino ha realizzato un’opera dal vivo ispirata al paesaggio. Il tema letterario di quest’anno era “I viaggi sono i viaggiatori” e la giuria ha decretato la vittoria di Eris Valenzano con il racconto “Cartoline”.',
      },
      items: [
        {
          src: 'img/gallery/premioettoreottaviano/1.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/1.jpg',
          w: 1200,
          h: 800,
          title: 'Premiazione del vincitore Eris Valenzano',
        },
        {
          src: 'img/gallery/premioettoreottaviano/2.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/2.jpg',
          w: 1200,
          h: 800,
          title: 'Il Sindaco di Rocca, Pierluigi Berta, intervista Carlo Colombo',
        },
        {
          src: 'img/gallery/premioettoreottaviano/3.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/4.jpg',
          w: 1200,
          h: 800,
          title: 'Sul palco Carlo Colombo, Pierluigi Berta e l\'attrice Patrizia Camatel prima della lettura della poesia Il sogno spezzato',
        },
        {
          src: 'img/gallery/premioettoreottaviano/4.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/4.jpg',
          w: 1200,
          h: 800,
          title: 'Il Sindaco di Rocca, Pierluigi Berta, intervista Carlo Colombo',
        },
        {
          src: 'img/gallery/premioettoreottaviano/6.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/6.jpg',
          w: 1200,
          h: 800,
          title: 'Performance pittorica e musicale',
        },
        {
          src: 'img/gallery/premioettoreottaviano/7.jpg',
          thumbnail: 'img/gallery/premioettoreottaviano/thumbs/7.jpg',
          w: 1200,
          h: 800,
          title: 'Carlo Colombo durante la presentazione del libro',
        },
      ],
    },
  ],
};

export default Gallery;
