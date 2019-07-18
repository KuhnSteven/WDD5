import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/Pg1">Pic of Day</NavLink>
        <NavLink to="/Pg2">Camera Gallery</NavLink>
        <NavLink to="/Pg3">Space Weather</NavLink>
        <NavLink to="/Pg4">WMTS Mars Trek</NavLink>
        <NavLink to="/Pg5">Travel Plans</NavLink>
      </nav>
    );
  }
}

export default Nav;
