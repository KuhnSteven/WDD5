import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav style={styles.navHeaderStyle}>
        <ul class="navbar-nav mx-auto nav-justified nav-pills navContainer" style={styles.navStyle}>
          <li class="nav-item mx-4">
            <Link to="/Home" style={styles.navLink}>Home</Link>
          </li>
          <li class="nav-item mx-4">
            <Link to="/Gallery" style={styles.navLink}>Gallery</Link>
          </li>
          <li class="nav-item mx-4">
            <Link to="/Trek" style={styles.navLink}>Mars Trek</Link>
          </li>
          <li class="nav-item mx-4">
            <Link to="/Planner" style={styles.navLink}>Planner</Link>
          </li>
          <li>
            <h2> / </h2>
          </li>
          <li class="nav-item mx-4">
            <Link to="/MyPlan" class="nav-link btn btn-outline-primary" style={styles.navLink}>My Plan</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;


const styles = {
  navHeaderStyle: {
    margin: 'auto 0'
  },
  navStyle: {
    display: 'flex',
    flexFlow: 'row'
  },
  display: 'block',
  padding: '0.5rem 1rem',
  color: 'blue',
  borderColor: 'blue'
  // Look into Radium for inline hover style
}