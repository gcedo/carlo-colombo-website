import React from 'react';

const About = () => (
  <div>
    <h3>L'autore</h3>
    <hr style={{ marginTop: 0 }} />
    <blockquote>
      <p>
        Come sono belle, le fiabe,<br />
        quando le stringi, tra le dita,<br />
        come la neve.
      </p>
      <small>le fiabe, <cite title="Source Title">La nostra casa in collina</cite></small>
    </blockquote>
    <div className="row">
      <div className="col-xs-5">
        <img src="img/carlo.png" width="145px" height="145px" alt="" className="img-circle" />
      </div>
      <div className="col-xs-7">
        Carlo Colombo, sono nato nel 1957.
        Da qualche anno, mi sono appassionato alla scrittura,
        interessandomi, in particolare,  di  personaggi che hanno
        vissuto a Rocca d’Arazzo, nell'astigiano.
      </div>
    </div>
    <div className="row" style={{ marginTop: 10 }}>
      <div className="col-xs-12">
        Mi  attira soprattutto la ricerca di notizie, l’indagine, la
        scoperta di nuovi particolari, il confronto di elementi tra di
        loro, a  volte contrastanti, finché non arrivo a trovare il
        bandolo della matassa.  Allora mi sento contento, appagato.<br />
        Accanto a tutto  ciò, mi piace esprimere i miei sentimenti, le
        mie emozioni legate al vissuto personale, a fatti, eventi che
        catturano la mia attenzione.
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <h4>Contatti</h4>
        <p>
          Se sei interessato a leggere i miei lavori, puoi contattarmi a <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">carlo@sito.it</a>
        </p>
      </div>
    </div>
  </div>
);

export default About;