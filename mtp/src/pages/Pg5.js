import React, {
  Component
} from 'react';
import '../App.css';

class Pg5 extends Component {
  state = {
  };


  componentDidMount() {
      
  }



  render() {
      return (
        <div style={styles.mainContainer}>
          <div style={styles.columnContainers}>
            <h1>Profile View</h1>
            <form>
                {/* <img></img> */}
                <h1>name</h1>
                <h1>age</h1>
                
            </form>
          </div>
          <div style={styles.columnContainers}>
            <h1>Personal Affairs</h1>
          </div>
          <div style={styles.columnContainers}>
            <h1>FAQ & Info</h1>
          </div>
        </div>
    );
  }
}

export default Pg5;

const styles = {
  mainContainer: {
    backgroundColor: 'white',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  columnContainers: {
    display: 'flex',
    flexFlow: 'column',
    width: '33%',
    border: '1px solid black'
  }
}