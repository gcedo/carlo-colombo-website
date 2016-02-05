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
          Se ti interessano i miei lavori o se
          semplicemente hai qualche curiosità,
          puoi scrivermi a <a href="mailto:&#099;&#097;&#114;&#108;&#111;&#099;&#111;&#108;&#111;&#109;&#098;&#111;&#049;&#057;&#053;&#055;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">carlocolombo1957 at gmail.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default About;
