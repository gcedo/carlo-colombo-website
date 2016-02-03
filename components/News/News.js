import React from 'react';
import NewsItem from './NewsItem';

const News = () => (
  <div className="col-md-6">
    <h3>News</h3>
    <hr style={{ marginTop: 0 }} />
    <NewsItem
      id="20160203"
      title="Il sogno spezzato"
      imgUri="img/news/cammarota.png"
      text="Libro dedicato a tutti coloro che trovano il coraggio di realizzare i propri sogni, non hanno il timore di alzarsi in volo e affrontare, a viso aperto, il loro destino. Qualunque esso sia."
    />
    <hr />
    <NewsItem
      id="20160202"
      title="La nostra casa in collina"
      imgUri="img/news/casa_in_collina_fronte.jpg"
      text="Le poesie  non hanno fretta, nessuna fretta, di ritrovarsi, in una lettera d’alfabeto, in una frase scritta. Possono cullarsi, rimanere sospese, accarezzare  le nostre emozioni."
    />
    <hr />
    <NewsItem
      id="20160204"
      title="Il conte Giovanni Riccardi"
      imgUri="img/news/riccardi.png"
      text="La ricerca storica è stata possibile solo unendo i miei interessi a quelli dell’amico Guido Poggio. Il lavoro è ancora in divenire, ma contiamo di consegnarlo presto alle stampe."
    />
  </div>
);

export default News;
