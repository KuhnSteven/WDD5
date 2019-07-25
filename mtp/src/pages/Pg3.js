import React, {
  Component
} from 'react';
import moment from 'moment';
import '../App.css';

// AT = Air Temperature, HWS = Wind Speed, PRE = pressure

class Pg3 extends Component {
  state = {
// Today
    // Temp
    todayAtAV: [],
    todayAtMN: [],
    todayAtMX: [],

    // Wind
    todayHwsAV: [],
    todayHwsMN: [],
    todayHwsMX: [],
    todayHwsWD: [],

    // Pressure
    todayPreAV: [],
    todayPreMN: [],
    todayPreMX: [],

// Day 2
    // Temp
    atAV2: [],
    atMN2: [],
    atMX2: [],

    // Wind
    hwsAV2: [],
    hwsMN2: [],
    hwsMX2: [],
    hwsWD2: [],

    // Pressure
    preAV2: [],
    preMN2: [],
    preMX2: [],

// Day 3
    // Temp
    atAV3: [],
    atMN3: [],
    atMX3: [],

    // Wind
    hwsAV3: [],
    hwsMN3: [],
    hwsMX3: [],
    hwsWD3: [],

    // Pressure
    preAV3: [],
    preMN3: [],
    preMX3: [],
  }
  componentDidMount() {
    //Space Weather Activty
    const marsWeatherAPI = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0`;
    fetch( marsWeatherAPI )
      .then( res => res.json() )
      .then( spaceWeather => {
        // Sol Keys array is Mars Sols (days) since Insight landing, 7 keys (days) are provided per group
        const weatherKeys = spaceWeather.sol_keys;
        console.log(weatherKeys);
        // console.log( spaceWeather[ weatherKeys[0] ] );
        let weatherKeyLength = weatherKeys.length;
        console.log(weatherKeyLength);


        this.setState( {
          todaySol: weatherKeys[weatherKeyLength-1],
          todayAtAV: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["AT"]["av"],
          todayAtMN: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["AT"]["mn"],
          todayAtMX: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["AT"]["mx"],
          todayHwsAV: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["HWS"]["av"],
          todayHwsMN: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["HWS"]["mn"],
          todayHwsMX: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["HWS"]["mx"],
          todayHwsWD: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["WD"]["most_common"]["compass_point"],
          todayPreAV: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["PRE"]["av"],
          todayPreMN: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["PRE"]["mn"],
          todayPreMX: spaceWeather[ weatherKeys[weatherKeyLength-1] ]["PRE"]["mx"],

          sol2: weatherKeys[weatherKeyLength-2],
          atAV2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["AT"]["av"],
          atMN2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["AT"]["mn"],
          atMX2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["AT"]["mx"],
          hwsAV2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["HWS"]["av"],
          hwsMN2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["HWS"]["mn"],
          hwsMX2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["HWS"]["mx"],
          hwsWD2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["WD"]["most_common"]["compass_point"],
          preAV2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["PRE"]["av"],
          preMN2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["PRE"]["mn"],
          preMX2: spaceWeather[ weatherKeys[weatherKeyLength-2] ]["PRE"]["mx"],

          sol3: weatherKeys[weatherKeyLength-3],
          atAV3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["AT"]["av"],
          atMN3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["AT"]["mn"],
          atMX3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["AT"]["mx"],
          hwsAV3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["HWS"]["av"],
          hwsMN3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["HWS"]["mn"],
          hwsMX3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["HWS"]["mx"],
          hwsWD3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["WD"]["most_common"]["compass_point"],
          preAV3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["PRE"]["av"],
          preMN3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["PRE"]["mn"],
          preMX3: spaceWeather[ weatherKeys[weatherKeyLength-3] ]["PRE"]["mx"],
        } );
      } );
  }
  render() {
    return (
    <section style={styles.weatherCenter}>
      <article style={styles.todaysWeather}>
        <h1 style={styles.weatherCardTitle}>TODAY</h1>
        <h1 style={styles.weatherCardTitle}>{moment(Date()).format("ddd, MMM/DD/YYYY")} - Sol {this.state.todaySol}</h1>
        <h1 style={styles.weatherCardHeader}>Temp</h1>
        <p style={styles.weatherCardText}>Avg: {this.state.todayAtAV}° F</p>
        <p style={styles.weatherCardText}>Max: {this.state.todayAtMX}° F</p>
        <p style={styles.weatherCardText}>Min: {this.state.todayAtMN}° F</p>

        <h1 style={styles.weatherCardHeader}>Wind Speed</h1>
        <p style={styles.weatherCardText}>Avg Direction: {this.state.hwsWD}</p>
        <p style={styles.weatherCardText}>Avg: {this.state.todayHwsAV}mph</p>
        <p style={styles.weatherCardText}>Max: {this.state.todayHwsMX}mph</p>
        <p style={styles.weatherCardText}>Min: {this.state.todayHwsMN}mph</p>

        <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
        <p style={styles.weatherCardText}>Avg: {this.state.todayPreAV}Pa</p>
        <p style={styles.weatherCardText}>Max: {this.state.todayPreMX}Pa</p>
        <p style={styles.weatherCardText}>Min: {this.state.todayPreMN}Pa</p>
      </article>

      <div style={styles.weatherReport}>
        <article style={styles.weatherCards}>
          <h1 style={styles.weatherCardTitle}>YESTERDAY</h1>
          <h1 style={styles.weatherCardTitle}>Sol {this.state.sol2}</h1>
          <h1 style={styles.weatherCardHeader}>Temperature</h1>
          <p style={styles.weatherCardText}>Avg: {this.state.atAV2}° F</p>
          <p style={styles.weatherCardText}>Max: {this.state.atMX2}° F</p>
          <p style={styles.weatherCardText}>Min: {this.state.atMN2}° F</p>

          <h1 style={styles.weatherCardHeader}>Wind Speed</h1>
          <p style={styles.weatherCardText}>Avg Direction: {this.state.hwsWD2}</p>
          <p style={styles.weatherCardText}>Avg: {this.state.hwsAV2}mph</p>
          <p style={styles.weatherCardText}>Max: {this.state.hwsMX2}mph</p>
          <p style={styles.weatherCardText}>Min: {this.state.hwsMN2}mph</p>

          <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
          <p style={styles.weatherCardText}>Avg: {this.state.preAV2}Pa</p>
          <p style={styles.weatherCardText}>Max: {this.state.preMX2}Pa</p>
          <p style={styles.weatherCardText}>Min: {this.state.preMN2}Pa</p>  
        </article>

        <article style={styles.weatherCards}>
          <h1 style={styles.weatherCardTitle}>2 DAYS AGO</h1>
          <h1 style={styles.weatherCardTitle}>Sol {this.state.sol3}</h1>
          <h1 style={styles.weatherCardHeader}>Temp</h1>
          <p style={styles.weatherCardText}>Avg: {this.state.atAV3}° F</p>
          <p style={styles.weatherCardText}>Max: {this.state.atMX3}° F</p>
          <p style={styles.weatherCardText}>Min: {this.state.atMN3}° F</p>

          <h1 style={styles.weatherCardHeader}>Wind Speed</h1>
          <p style={styles.weatherCardText}>Avg Direction: {this.state.hwsWD}</p>
          <p style={styles.weatherCardText}>Avg: {this.state.hwsAV3}mph</p>
          <p style={styles.weatherCardText}>Max: {this.state.hwsMX3}mph</p>
          <p style={styles.weatherCardText}>Min: {this.state.hwsMN3}mph</p>

          <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
          <p style={styles.weatherCardText}>Avg: {this.state.preAV3}Pa</p>
          <p style={styles.weatherCardText}>Max: {this.state.preMX3}Pa</p>
          <p style={styles.weatherCardText}>Min: {this.state.preMN3}Pa</p>  
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