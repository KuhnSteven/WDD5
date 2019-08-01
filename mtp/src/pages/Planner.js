import React, {
  Component
} from 'react'

// styling & reactstrap
// import { Button } from 'reactstrap'
import '../App.css'

class Planner extends Component {
  state = {
    userProfile: {
      name: 'Steve Kuhn',
      age: 23,
      location: 'Florida',
      gender: 'male',
      agency: 'spaceX',
      launchDay: '07/04/2025'
    },
  };


  componentDidMount() {
    if(localStorage.getItem('userProfile')){
      let userProfile = JSON.parse(localStorage.getItem('userProfile'));
      this.setState({userProfile: userProfile});
    }
  }

  saveProfile = e =>{
    e.preventDefault();
    if(this.state.name == null){
      alert('Please enter a name')
      return false
    }
    if(this.state.age == null){
      alert('Please enter your age')
      return false
    }

    let userProfile = this.state.userProfile
    userProfile.push({'name':this.state.name, 'age': this.state.age})

    this.setState({userProfile: this.state.userProfile})
    localStorage.setItem('userProfile', JSON.stringify(userProfile))

    let form = document.getElementById("registForm")
    form.reset()
  }

  render() {
      return (
        <div>
          <form id="registForm" action="" method="post" style={styles.form}>
            <div style={styles.mainContainer}>
              <fieldset style={styles.columnContainers}>
                <legend>Account Details</legend>
                <label for="accName">Passenger name:</label>
                <input class="mx-auto" type="text" name="accName" id="accName" placeholder="Astro Naut" />

                <label for="age">Age:</label>
                <input class="mx-auto" name="age" type="number" min="18" max="55" placeholder="1" />

                <label for="location">Based From:</label>
                <input class="mx-auto" type="text" name="location" id="location" placeholder="Florida" />

                <label for="gender">Gender:</label>
                <div style={styles.radioBoxes}>
                  <span style={styles.spanStyle}>
                    <label for="male">Male</label>
                    <input type="radio" style={styles.radioBtns} name="gender" id="male" value="male" checked />
                  </span>
                  <span style={styles.spanStyle}>
                    <label for="female">Female</label>
                    <input type="radio" style={styles.radioBtns} name="gender" id="female" value="female" />
                  </span>
                  <span style={styles.spanStyle}>
                    <label for="other">Other</label>
                    <input type="radio" style={styles.radioBtns} name="gender" id="other" value="other" />
                  </span>
                </div>
              </fieldset>

              <fieldset style={styles.columnContainers}>
                <legend>Mission & Agency Details</legend>
                <label for="agency">Travel Agency:</label>
                  <div style={styles.radioBoxes}>
                    <span style={styles.spanStyle}>
                      <label for="spaceX">Space-X</label>
                      <input type="radio" style={styles.radioBtns} name="agency" id="spaceX" value="spaceX" />
                    </span>
                    <span style={styles.spanStyle}>
                      <label for="nasa">NASA</label>
                      <input type="radio" style={styles.radioBtns} name="agency" id="nasa" value="nasa" />
                    </span>
                    <span style={styles.spanStyle}>
                      <label for="russia">Russia</label>
                      <input type="radio" style={styles.radioBtns} name="agency" id="russia" value="russia" />
                    </span>
                  </div>
                    <label for="date">Launch Date:</label>
                    <input class="mx-auto" type="text" name="date" id="date" placeholder="MM/DD/YYYY" />
              </fieldset>
            </div>
            <button class="w-25 mt-3 mx-auto p-2 btn-outline-primary" type="submit" name="saveBtn" onClick={this.saveProfile} value="Submit" >Save</button>
          </form>
        </div>
    );
  }
}

export default Planner;

const styles = {
  mainContainer: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  form: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: 'white',
    padding: '2%'
  },
  columnContainers: {
    display: 'flex',
    flexFlow: 'column',
    width: '33%',
    border: '1px solid black'
  },
  radioBoxes: {
    display: 'flex',
    justifyContent: 'space-evenly',
    border: '.5px solid black',
    margin: 'auto',
    padding: '2%'
  },
  spanStyle: {
    border: 'solid .5px black',
    padding: '1% 3%'
  },
  radioBtns: {
    marginLeft: '2%'
  }
}