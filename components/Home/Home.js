import React from 'react';

import Carousel from '../Carousel/Carousel';
import News from '../News/News';
import SideColumn from '../SideColumn/SideColumn';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Carousel />
        <div className="container">
          <div className="row">
            <News />
            <SideColumn />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
