import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {FaHome} from 'react-icons/fa'
import {FaHandPeace} from 'react-icons/fa'
import {FaGithubAlt} from 'react-icons/fa'

class Footer extends Component {
  render() {
    return (
      <footer>
        <NavLink to="/Pg1"><FaHome /></NavLink>
        <NavLink to="/Pg2"><FaHandPeace /></NavLink>   
        <NavLink to="/Pg3"><FaGithubAlt /></NavLink>    
      </footer>
    );
  }
}

export default Footer;
