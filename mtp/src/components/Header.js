import React, { Component } from 'react';
import Nav from './Nav'
import logo from '../images/mtpLogo.png';

class Header extends Component {
  render() {
    return (
      <header className="myHeader" style={styles.headerStyle}>
        <span style={styles.titleStyle}>
          <img style={styles.logoStyle} src={logo} alt="MTP"></img>
          <h1 style={styles.titleHeaderStyle}>Mars Travel Planner</h1>
        </span>
        <Nav />
      </header>
    );
  }
}

export default Header;

const styles = {
  headerStyle:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoStyle: {
    width: '150px',

  },
  titleStyle: {
    display: 'flex',
    padding: '.5% .5% 2%'
  },
  titleHeaderStyle: {
    margin: 'auto'
  }
}