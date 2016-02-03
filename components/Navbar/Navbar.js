import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default" style={{ marginBottom: 0 }}>
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Carlo Colombo</Link>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/books">Libri</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
