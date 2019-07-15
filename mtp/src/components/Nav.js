import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Pg1">Pic of Day</NavLink>
        <NavLink to="/Pg2">Camera Gallery</NavLink>
        <NavLink to="/Pg3">Space Weather</NavLink>
      </nav>
    );
  }
}

export default Nav;
