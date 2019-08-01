import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {FaSpaceShuttle} from 'react-icons/fa'
import {FaCompass} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footerStyle}>
        <section style={styles.splitStyle}>
          <h5 style={styles.headerStyle}>Project Development</h5>
          <p>Developer - Steve Kuhn</p>
          <p>To commemorate the 50th Anniversary of the Apollo Moon Landing,
          I wanted to create an application that focused on space and looks
          to the future.</p>
        </section>
        <section style={styles.splitStyle2}>
          <h5 style={styles.headerStyle}>Navigation</h5>
          <Link style={styles.navStyle} to="/Home"><FaHome /> Home</Link>
          <Link style={styles.navStyle} to="/Gallery"><FaCompass /> Gallery</Link> 
          <Link style={styles.navStyle} to="/Trek"><FaMapMarkedAlt /> Mars Trek</Link>
          <Link style={styles.navStyle} to="/Planner"><FaSpaceShuttle /> Planner</Link>
        </section>
        <section style={styles.splitStyle}>
          <h5 style={styles.headerStyle}>Project Details</h5>
          <p>MTP uses public data provided by NASA to report on Mars
            weather, photography from the Mars rovers, satellite imaging
            and more.</p>
        </section>
      </footer>
    );
  }
}

export default Footer;

const styles = {
  footerStyle: {
      display: 'flex',
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
      padding: '1%',
      margin: '0 7%'
  },
  navStyle: {
    margin: '2% auto'
  },
  headerStyle: {
    textAlign: 'center'
  }
}