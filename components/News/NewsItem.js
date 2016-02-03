import React from 'react';
import { Link } from 'react-router';

const NewsItem = ({ title, date, imgUri, text, id }) => (
  <div>
    <h4>{title} <small>{date}</small></h4>
    <div className="row">
      <div className="col-xs-4">
        <img src={imgUri} height="140" width="140" className="img-rounded" />
      </div>
      <div className="col-xs-8">
        <p>{text}</p>
        <Link to={`/article/${id}`}>
          <button className="btn btn-primary btn-xs">Continua</button>
        </Link>
      </div>
    </div>
  </div>
);

export default NewsItem;
