import React, { PropTypes as T } from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

AppComponent.propTypes = {
  children: T.object,
};
