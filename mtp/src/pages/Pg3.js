import React, {
  Component
} from 'react';
import '../App.css';

// AT = Air Temperature, HWS = Wind Speed, PRE = pressure

class Pg3 extends Component {
  state = {
    // Temp
    atAV: [],
    // atCT: [],
    atMN: [],
    atMX: [],

    // Wind
    hwsAV: [],
    // hwsCT: [],
    hwsMN: [],
    hwsMX: [],
    // Pressure
    preAV: [],
    // preCT: [],
    preMN: [],
    preMX: [],
  }
  componentDidMount() {
    //Space Weather Activty
    const marsWeatherAPI = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0`;
    fetch( marsWeatherAPI )
      .then( res => res.json() )
      .then( spaceWeather => {
        console.log( spaceWeather[ "216" ] );
        this.setState( {
          atAV: spaceWeather["216"]["AT"]["av"],
          atCT: spaceWeather["216"]["AT"]["ct"],
          atMN: spaceWeather["216"]["AT"]["mn"],
          atMX: spaceWeather["216"]["AT"]["mx"],
          hwsAV: spaceWeather["216"]["HWS"]["av"],
          hwsCT: spaceWeather["216"]["HWS"]["ct"],
          hwsMN: spaceWeather["216"]["HWS"]["mn"],
          hwsMX: spaceWeather["216"]["HWS"]["mx"],
          preAV: spaceWeather["216"]["PRE"]["av"],
          preCT: spaceWeather["216"]["PRE"]["ct"],
          preMN: spaceWeather["216"]["PRE"]["mn"],
          preMX: spaceWeather["216"]["PRE"]["mx"],
        } );
      } );
  }
  render() {
    return ( <section>
      <p>{this.state.utc}</p>
      <h1>Temp</h1>
      <p>Temp Avg: {this.state.atAV}° F</p>
      {/* <p>{this.state.atCT}</p> */}
      <p>Temp Min: {this.state.atMN}° F</p>
      <p>Temp Max: {this.state.atMX}° F</p>
      <h1>Wind Speed</h1>
      <p>Avg Wind Speed: {this.state.hwsAV}mph</p>
      {/* <p>{this.state.hwsCT}</p> */}
      <p>Min Wind Speed: {this.state.hwsMN}mph</p>
      <p>Max Wind Speed: {this.state.hwsMX}mph</p>
      <h1>Barometric Pressure</h1>
      <p>Avg Pressure: {this.state.preAV}Pa</p>
      {/* <p>{this.state.preCT}</p> */}
      <p>Min Pressure: {this.state.preMN}Pa</p>
      <p>Max Pressure: {this.state.preMX}Pa</p>
    </section>
    );
  }
}

export default Pg3;