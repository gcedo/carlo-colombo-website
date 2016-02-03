import React, { PropTypes as T } from 'react';
import Book from './Book';

class Books extends React.Component {

  render() {
    const { books } = this.props;
    return (
      <div className="container">
        {
          books.map((book, index) => <Book key={index} data={book} />)
        }
      </div>
    );
  }
}

Books.propTypes = {
  books: T.arrayOf(T.shape({
    cover: T.string,
    title: T.string,
    quote: T.string,
    description: T.string,
  })),
};

Books.defaultProps = {
  books: [
    {
      cover: '/img/covers/il_sogno_spezzato.png',
      title: 'Il sogno spezzato',
      quote: 'Alto, vigoroso, col suo bel volto fiero illuminato dagli azzurri occhi buoni, infinitamente dolci.',
      description: 'La storia dell\'aviatore Enrico Cammarota Adorno, ingegnere e pionere del volo partito da Rocca d\'Arazzo e le vicende della famiglia del nonno, Senatore Giuseppe Cornero: sullo sfondo lo scenario di un\'Italia post risorgimentale e agli albori dell\'aviazione.',
      preview: 'books/il_sogno_spezzato.pdf',
    },

    {
      cover: '/img/covers/la_nostra_casa_in_collina.jpg',
      title: 'La nostra casa in collina',
      quote: 'Certe case, hanno più storia delle altre. Possiedono un loro battito, un respiro lento, profondo.',
      description: 'Provo a descrivere, a raccontare sensazioni, rumori, profumi, odori, volti che mi hanno toccato, nell\'intimo, hanno avuto una parte nel mio vissuto.',
      preview: 'books/la_nostra_casa_in_collina.pdf',
    },
  ],
};

export default Books;
