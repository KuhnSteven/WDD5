import React, {
  Component
} from 'react';
import moment from 'moment';
import '../App.css';

// AT = Air Temperature, HWS = Wind Speed, PRE = pressure

class Pg3 extends Component {
  state = {
    solArray: [],
    solArray1: [],
    solArray2: [],
    solArray3: [],
    solArray4: [],
    solArray5: [],
    solArray6: [],
  }
  componentDidMount() {
    //Space Weather Activty
    const marsWeatherAPI = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0`;
    fetch( marsWeatherAPI )
      .then( res => res.json() )
      .then( spaceWeather => {
        console.log(spaceWeather);
        // Sol Keys array is Mars Sols (days) since Insight landing, 7 keys (days) are provided per group
        const weatherKeys = spaceWeather.sol_keys;
        let weatherKeyLength = weatherKeys.length;


        // State array to compact each sol's worth of data into an obj
        let solArray = [];
        for(let i = weatherKeyLength-1 ; i >= 0 ; i--){
          let solNumber = weatherKeys[i];

          let solObject = {};
          solObject.solNumber = solNumber;
          solObject.atMin = spaceWeather[solNumber].AT.mn;
          solObject.atMax = spaceWeather[solNumber].AT.mx;
          solObject.atAvg = spaceWeather[solNumber].AT.av;

          solObject.windDir = spaceWeather[solNumber].WD.most_common;
          solObject.hwsMin = spaceWeather[solNumber].HWS.mn;
          solObject.hwsMax = spaceWeather[solNumber].HWS.mx;
          solObject.hwsAvg = spaceWeather[solNumber].HWS.av;

          solObject.preMin = spaceWeather[solNumber].PRE.mn;
          solObject.preMax = spaceWeather[solNumber].PRE.mx;
          solObject.preAvg = spaceWeather[solNumber].PRE.av;
          solArray.push(solObject);
        }
        console.log("solArray",solArray);
        console.log(solArray.windDir);
        // End of Sean's meddling

        this.setState( {
          solArray: solArray[0],
        } );
      } );
  }
  render() {
    return (
    <section style={styles.weatherCenter}>
      <article style={styles.todaysWeather}>
        <h1 style={styles.weatherCardTitle}>TODAY</h1>
        <h1 style={styles.weatherCardTitle}>{moment(Date()).format("ddd, MMM/DD/YYYY")} - Sol {this.state.solArray.solNumber}</h1>
       
        <h1 style={styles.weatherCardHeader}>Temperature</h1>
        <ul>
          <li>
            <p>Max: {this.state.solArray.atMax}° F</p>
          </li>
          <li>
            <p>Avg: {this.state.solArray.atAvg}° F</p>
          </li>
          <li>
            <p>Min: {this.state.solArray.atMin}° F</p>
          </li>
        </ul>

        <h1 style={styles.weatherCardHeader}>Wind</h1>
        <ul>
          <li>
            {/* <p>Max: {this.state.solArray.windDir}</p> */}
          </li>
          <li>
            <p>Max: {this.state.solArray.hwsMax}mph</p>
          </li>
          <li>
            <p>Avg: {this.state.solArray.hwsAvg}mph</p>
          </li>
          <li>
            <p>Min: {this.state.solArray.hwsMin}mph</p>
          </li>
        </ul>

        <h1 style={styles.weatherCardHeader}>Pressure</h1>
        <ul>
          <li>
            <p>Max: {this.state.solArray.preMax}Pa</p>
          </li>
          <li>
            <p>Avg: {this.state.solArray.preAvg}Pa</p>
          </li>
          <li>
            <p>Min: {this.state.solArray.preMin}Pa</p>
          </li>
        </ul>

        <p>
        Artist Credit: 
        </p>

      </article>


      {/* div container with days of weather */}
      <div style={styles.weatherReport}>
        <article style={styles.weatherCards}>
          <h1 style={styles.weatherCardTitle}>YESTERDAY</h1>
          
        </article>

        <article style={styles.weatherCards}>
          <h1 style={styles.weatherCardTitle}>2 DAYS AGO</h1>
        </article>

        <article style={styles.weatherCards}>
          <h1 style={styles.weatherCardTitle}>3 DAYS AGO</h1>
          <h1 style={styles.weatherCardTitle}>Sol ?</h1>
          <h1 style={styles.weatherCardHeader}>Temp</h1>

          <h1 style={styles.weatherCardHeader}>Wind Speed</h1>

          <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
        </article>
      </div>
    </section>
    );
  }
}

export default Pg3;

const styles = {
  weatherCenter: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    textAlign: 'left',
    padding: '2%'
  },
  todaysWeather: {
    backgroundColor: 'grey',
    padding: '0% 3% 3%',
    margin: '2%'

  },
  weatherReport: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly'

  },
  weatherCards: {
    backgroundColor: 'grey',
    width: 'fit-content',
    padding: '1%'
  },
  weatherCardTitle: {
    margin: '2% 0 0 0',
    color: 'white',
    textAlign: 'center'
  },
  weatherCardHeader: {
    margin: '2% 0 0 0'
  },
  weatherCardText: {
    margin: '0px'
  }
}