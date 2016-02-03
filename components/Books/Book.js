import React from 'react';

const Book = ({ data }) => {
  const { cover, title, quote, description, preview } = data;
  return (
    <div className="Book row">
      <div className="col-md-4">
        <img src={cover} alt="" className="center-block" style={{ marginTop: 23 }} />
      </div>
      <div className="col-md-8">
        <h3 className="hidden-sm hidden-xs">{title}</h3>
        <h3 className="text-center visible-sm-block visible-xs-block">{title}</h3>
        <div className="row">
          <div className="col-md-8">
            <blockquote style={{ marginTop: 15 }}>
              <p>{quote}</p>
            </blockquote>
            <p>{description}</p>
          </div>
          <div className="col-md-4">
            <a
              className="btn btn-block btn-primary hidden-sm hidden-xs"
              style={{ marginTop: 15 }}
              target="_blank"
              href={preview}
            >
              <span
                className="glyphicon glyphicon-eye-open"
                aria-hidden="true"
              /> Anteprima
            </a>
            <a
              className="btn btn-lg btn-primary visible-xs-block visible-sm-block"
              style={{ marginTop: 15 }}
              target="_blank"
              href={preview}
            >
              <span
                className="glyphicon glyphicon-eye-open"
                aria-hidden="true"
              /> Anteprima
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
