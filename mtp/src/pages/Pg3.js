import React, {
  Component
} from 'react';
import '../App.css';

// AT = Air Temperature, HWS = Wind Speed, PRE = pressure

class Pg3 extends Component {
  state = {
    // Temp
    atAV: [],
    atMN: [],
    atMX: [],

    // Wind
    hwsAV: [],
    hwsMN: [],
    hwsMX: [],
    hwsWD: [],

    // Pressure
    preAV: [],
    preMN: [],
    preMX: [],
  }
  componentDidMount() {
    //Space Weather Activty
    const marsWeatherAPI = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0`;
    fetch( marsWeatherAPI )
      .then( res => res.json() )
      .then( spaceWeather => {
        // console.log( spaceWeather[ "223" ] );
        this.setState( {
          atAV: spaceWeather["223"]["AT"]["av"],
          atMN: spaceWeather["223"]["AT"]["mn"],
          atMX: spaceWeather["223"]["AT"]["mx"],
          hwsAV: spaceWeather["223"]["HWS"]["av"],
          hwsMN: spaceWeather["223"]["HWS"]["mn"],
          hwsMX: spaceWeather["223"]["HWS"]["mx"],
          hwsWD: spaceWeather["223"]["WD"]["most_common"]["compass_point"],
          preAV: spaceWeather["223"]["PRE"]["av"],
          preMN: spaceWeather["223"]["PRE"]["mn"],
          preMX: spaceWeather["223"]["PRE"]["mx"],
        } );
      } );
  }
  render() {
    return (
    <section style={styles.weatherCenter}>
      <article style={styles.weatherCards}>
        <h1 style={styles.weatherCardHeader}>Temp</h1>
        <p style={styles.weatherCardText}>Temp Avg: {this.state.atAV}° F</p>
        <p style={styles.weatherCardText}>Temp Max: {this.state.atMX}° F</p>
        <p style={styles.weatherCardText}>Temp Min: {this.state.atMN}° F</p>

        <h1 style={styles.weatherCardHeader}>Wind Speed</h1>
        <p style={styles.weatherCardText}>Avg Wind Direction: {this.state.hwsWD}</p>
        <p style={styles.weatherCardText}>Avg Wind Speed: {this.state.hwsAV}mph</p>
        <p style={styles.weatherCardText}>Max Wind Speed: {this.state.hwsMX}mph</p>
        <p style={styles.weatherCardText}>Min Wind Speed: {this.state.hwsMN}mph</p>

        <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
        <p style={styles.weatherCardText}>Avg Pressure: {this.state.preAV}Pa</p>
        <p style={styles.weatherCardText}>Max Pressure: {this.state.preMX}Pa</p>
        <p style={styles.weatherCardText}>Min Pressure: {this.state.preMN}Pa</p>
      </article>
    </section>
    );
  }
}

export default Pg3;

const styles = {
  weatherCenter: {
    backgroundColor: 'white',
    textAlign: 'left',
    padding: '2%'
  },
  weatherCards: {
    backgroundColor: 'grey',
    width: 'fit-content',
    padding: '1%'
  },
  weatherCardHeader: {
    margin: '2% 0 0 0'
  },
  weatherCardText: {
    margin: '0px'
  }
}