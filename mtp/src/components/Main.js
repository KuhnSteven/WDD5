import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import MyPlan from '../pages/MyPlan';
import Trek from '../pages/Trek';
import Planner from '../pages/Planner';

class Main extends Component {
  render() {
    return (
      <main style={styles.mainStyle}>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Gallery' component={Gallery} />
        <Route exact path='/MyPlan' component={MyPlan} />
        <Route exact path='/Trek' component={Trek} />
        <Route exact path='/Planner' component={Planner} />
      </main>
    );
  }
}

export default Main;

const styles = {
  mainStyle: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: '2',
      border: '2px white solid',
      margin: '2%',
      padding: '1%',
      textAlign: 'center'
  }
}