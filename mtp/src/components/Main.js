import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Home from '../pages/Home';
import Pg2 from '../pages/Pg2';
import Pg3 from '../pages/Pg3';
import Pg4 from '../pages/Pg4';
import Planner from '../pages/Planner';

class Main extends Component {
  render() {
    return (
      <main style={styles.mainStyle}>
        <Route exact path='/' component={Home} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Pg2' component={Pg2} />
        <Route exact path='/Pg3' component={Pg3} />
        <Route exact path='/Pg4' component={Pg4} />
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