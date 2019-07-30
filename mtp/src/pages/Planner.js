import React, {
  Component
} from 'react';

// styling & reactstrap
import { Button } from 'reactstrap';
import '../App.css';

class Planner extends Component {
  state = {
  };


  componentDidMount() {
      
  }



  render() {
      return (
        <div>
          <form action="" method="post" style={styles.mainContainer}>
            <fieldset style={styles.columnContainers}>
              <legend>Account Details</legend>
              <label for="accName">Passenger name:</label>
              <input type="text" name="accName" id="accName" placeholder="Sean B." />

              <label for="age">Age:</label>
              <select name="age" id="age" value="age">
                  <option value="2129">21-29</option>
                  <option value="3139">31-39</option>
                  <option value="4149">41-49</option>
                  <option value="5159">51-59</option>
                  <option value="6169">61-69</option>
                  <option value="7179">71-79</option>
              </select>

              <label for="location">Based From:</label>
              <input type="text" name="location" id="location" placeholder="Florida" />

              <label for="gender">Gender:</label>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="male" checked />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="other">Other</label>
              <input type="radio" name="gender" id="other" value="other" />
            </fieldset>

            <fieldset style={styles.columnContainers}>
              <legend>Mission & Agency Details</legend>
              <label for="agency">Travel Agency:</label>
                  <label for="spaceX">Space-X</label>
                  <input type="radio" name="agency" id="spaceX" value="spaceX" />
                  <label for="nasa">NASA</label>
                  <input type="radio" name="agency" id="nasa" value="nasa" />
                  <label for="russia">Russia</label>
                  <input type="radio" name="agency" id="russia" value="russia" />

                  <label for="date">Launch Date:</label>
                  <input type="text" name="date" id="date" placeholder="MM/DD/YYYY" />
            </fieldset>
            <input type="submit" value="Submit" />
          </form>
        </div>

        // <div style={styles.mainContainer}>
        //   <div style={styles.columnContainers}>
        //     <h1>Profile View</h1>
        //     <div>
        //         {/* <img></img> */}
        //         <h1>name</h1>
        //         <h1>age</h1>
                
        //     </div>
        //   </div>
        //   <div style={styles.columnContainers}>
        //     <h1>Personal Affairs</h1>
        //     <div>
        //         <h1>Travel Agency</h1>
                
        //     </div>
        //     <div>
        //       <form>
        //         <h1>Belongings Checklist</h1>
        //       </form>
        //       <form>
        //         <h1>Personal Launch Day Schedule</h1>
        //       </form>
        //     </div>
        //   </div>
        //   <div style={styles.columnContainers}>
        //     <h1>FAQ & Info</h1>
        //   </div>
        // </div>
    );
  }
}

export default Planner;

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