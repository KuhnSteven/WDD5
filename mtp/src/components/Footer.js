import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaHandPeace} from 'react-icons/fa'
// import {FaGithubAlt} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footerStyle}>
        <section style={styles.splitStyle}>
          <h1 style={styles.headerStyle}>Project Development:</h1>
          <p>Developer - Steve Kuhn</p>
          <p>To commemorate the 50th Anniversary of the Apollo Moon Landing, I wanted to create an application that focused on space and looks to the future.</p>
        </section>
        <section style={styles.splitStyle2}>
          <h1 style={styles.headerStyle}>Navigation</h1>
          <NavLink to="/Home"><FaHome /> Home</NavLink>
          <NavLink to="/Pg2"><FaHandPeace /> Gallery</NavLink> 
          <NavLink to="/Planner"><FaHome /> Planner</NavLink>
        </section>
        <section style={styles.splitStyle}>
          <h1 style={styles.headerStyle}>Project Details:</h1>
          <p>This project was composed for Project & Portfolio 5 at Full Sail University, instructed by Sean Bernath. The scope of the project was an API driven site with any functionality of our choice. MTP Includes multiple APIs, queried in a multitude of ways.</p>
        </section>
      </footer>
    );
  }
}

export default Footer;

const styles = {
  footerStyle: {
      display: 'flex',
      flexDirection: 'row',
      padding: '1%'
  },
  splitStyle: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '1',
      maxWidth: '33%',
      backgroundColor: 'white',
      padding: '1%'
  },
  splitStyle2: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '2',
      backgroundColor: 'white',
      padding: '1%'
  },
  headerStyle: {
    textAlign: 'center'
  }
}