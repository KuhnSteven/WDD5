import React, { Component } from 'react';
import Nav from './Nav'

class Header extends Component {
  render() {
    return (
      <header className="myHeader" style={styles.headerStyle}>
        <div style={styles.titleStyle}>
          <img src="/public/images/mtpLogo.jpg" alt="MTP"></img>
          <h3 style={styles.titleHeaderStyle}>Mars Travel Planner</h3>
        </div>
        <Nav />
      </header>
    );
  }
}

export default Header;

const styles = {
  headerStyle:{
    padding: '2% 0%'
  },
  titleStyle: {
    display: 'flex',
    padding: '2% 1%'
  },
  titleHeaderStyle: {
    margin: '0px'
  }
}