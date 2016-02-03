import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import http from 'http';
import routes from './routes';
import httpProxy from 'http-proxy';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import api from './api.js';

const app = express();
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3003;

app.use(compression());
app.use(morgan(isProduction ? 'combined' : 'dev'));
app.use(express.static('public'));
app.set('view engine', 'ejs');

if (!isProduction) {
  console.log('> Loading dev environment...');
  const proxy = httpProxy.createProxyServer();
  app.all('/build.js', (req, res) => {
    proxy.web(req, res, { target: 'http://localhost:8080' });
  });
}

app.use('/api', api);
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(<RoutingContext {...props} />);
      res.render('index', { markup });
    } else {
      res.sendStatus(404);
    }
  });
});

const server = http.createServer(app);

server.listen(port);
server.on('listening', () => {
  console.log('> Server started...');
});
