import App from './components/app';

import Books from './components/Books/Books';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import Article from './components/News/Article';

export default {
  path: '',
  component: App,
  childRoutes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/books',
      component: Books,
    },
    {
      path: '/gallery',
      component: Gallery,
    },
    {
      path: '/article/:id',
      component: Article,
    },
  ],
};
