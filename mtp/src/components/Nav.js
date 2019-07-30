import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav style={styles.navStyle}>
        {/* <ul>
          <li>
            <NavLink to="/Pg1" style={styles.navLink}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Pg2" style={styles.navLink}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/Pg4" style={styles.navLink}>TEMP Mars Trek</NavLink>
          </li>
          <li>
            <NavLink to="/Pg5" style={styles.navLink}>Travel Plans</NavLink>
          </li>
        </ul> */}

        <NavLink to="/Home" style={styles.navLink}>Home</NavLink>
        <NavLink to="/Pg2" style={styles.navLink}>Gallery</NavLink>
        <NavLink to="/Pg4" style={styles.navLink}>TEMP Mars Trek</NavLink>
        <NavLink to="/Planner" style={styles.navLink}>Travel Plans</NavLink>
      </nav>
    );
  }
}

export default Nav;


const styles = {
  navStyle: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  navLink: {
    textDecoration: 'none',
  }
  // Look into Radium for inline hover style
}