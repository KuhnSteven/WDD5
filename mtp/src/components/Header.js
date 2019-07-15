import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <header className="myHeader">
      <h3>Title</h3>
      <Nav />
      </header>
    );
  }
}

export default Header;
