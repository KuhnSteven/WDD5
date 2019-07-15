import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Pg1">Link 1</NavLink>
        <NavLink to="/Pg2">Link 2</NavLink>
        <NavLink to="/Pg3">Link 3</NavLink>
      </nav>
    );
  }
}

export default Nav;
