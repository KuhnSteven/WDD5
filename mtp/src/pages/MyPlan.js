import React, {
  Component
} from 'react';
import '../App.css';
// import Profile from '../components/Profile'


class MyPlan extends Component {
  state = {
    userProfile: {
      name: 'Steve Kuhn',
      age: 23,
      location: 'Florida',
      gender: 'male',
      agency: 'spaceX',
      launchDay: '07/04/2025'
    },
  }
  componentDidMount() {

  }

  render() {
    // let currentProfile = this.state.userProfile.map((val,key)=>{
    //   return <Profile val={val} key={key} id={key} />
    // })
    return (
    
        <div style={styles.mainContainer}>
          <div style={styles.columnContainers}>
            <h1>Profile View</h1>
            <div>
              <div style={styles.avatarContainer}>
                {/* <img></img> */}
              </div>
                <h1>name</h1>
                <p>{this.state.userProfile.name}</p>
                <h1>age</h1>
                <p>{this.state.userProfile.age}</p>
                
            </div>
          </div>
          <div style={styles.columnContainers}>
            <h1>Personal Affairs</h1>
            <div>
                <h1>Travel Agency</h1>
                <p>{this.state.userProfile.agency}</p>
            </div>
            <div>
              <form>
                <h1>Belongings Checklist</h1>
              </form>
              <form>
                <h1>Personal Launch Day Schedule</h1>
                <p>{this.state.userProfile.launchDay}</p>
              </form>
            </div>
          </div>
          <div style={styles.columnContainers}>
            <h1>FAQ & Info</h1>
          </div>
        </div>
    );
  }
}

export default MyPlan;

const styles = {
  mainContainer: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  columnContainers: {
    display: 'flex',
    flexFlow: 'column',
    width: '33%',
    border: '1px solid black'
  },
  avatarContainer: {
    backgroundColor: 'grey',
    height: '250px',
    width: '250px',
    margin: '5% auto'
  }
}