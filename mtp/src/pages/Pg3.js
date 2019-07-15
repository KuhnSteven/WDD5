import React, { Component } from 'react';
import '../App.css';

class Pg3 extends Component {
  state = {
    spaceWeather: []
  }
  componentDidMount(){
    //Space Weather Activty
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    const spaceWeatherArray = ["CME", "CMEAnalysis", "GST", "IPS", "FLR", "SEP", "MPC", "RBE", "HSS", "WSAEnlilSimulation", "notifications"];
    const marsWeatherAPI = `https://api.nasa.gov/DONKI/${spaceWeatherArray[1]}?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${apiKey}`;
    fetch(marsWeatherAPI)
      .then(res => res.json())
      .then(spaceWeather => {
        console.log(spaceWeather[0]);
        this.setState({
          spaceWeather: spaceWeather[0]
        });
      });
    }
  render() {
    return (
      <section>
        <p>{this.state.spaceWeather.catalog}</p>
        <p>{this.state.spaceWeather.halfAngle}</p>
        <p>{this.state.spaceWeather.latitude}</p>
        <p>{this.state.spaceWeather.logitude}</p>
        <p>{this.state.spaceWeather.speed}</p>
        <p>{this.state.spaceWeather.type}</p>
        <p>{this.state.spaceWeather.time21_5}</p>
      </section>
    );
  }
}

export default Pg3;
