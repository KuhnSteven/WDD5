import React, {
  Component
} from 'react';
import '../App.css';

class Pg1 extends Component {
  state = {
    picofDay: [],
    cameraGallery: [],
    spaceWeather: []
  };


  componentDidMount() {
    //Photo of the day
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    fetch(picofDayAPI)
      .then(res => res.json())
      .then(picofDay => {
        console.log(picofDay);
        this.setState({
          picofDay: picofDay
        });
      });
    //Camera Gallery
    const cameras = ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam", "pancam", "minites"];
    const cameraGalleryAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameras[0]}&api_key=${apiKey}`;
    fetch(cameraGalleryAPI)
      .then(res => res.json())
      .then(cameraGallery => {
        console.log(cameraGallery.photos);
        this.setState({
          cameraGallery: cameraGallery.photos
        });
      });
    //Space Weather Activty
    const spaceWeatherArray = ["CME", "CMEAnalysis", "GST", "IPS", "FLR", "SEP", "MPC", "RBE", "HSS", "WSAEnlilSimulation", "notifications"];
    const marsWeatherAPI = `https://api.nasa.gov/DONKI/${spaceWeatherArray[1]}?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=${apiKey}`;
    fetch(marsWeatherAPI)
      .then(res => res.json())
      .then(spaceWeather => {
        console.log(spaceWeather);
        this.setState({
          spaceWeather: spaceWeather
        });
      });
  }



  render() {
    return ( < section >
      Link 1 < /section>
    );
  }
}

export default Pg1;