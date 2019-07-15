import React, { Component } from 'react';
import '../App.css';

class Pg2 extends Component {
  state = {
    cameraGallery: [],
    cameraInfo: []
  }
  componentDidMount(){
        //Camera Gallery
        const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
        const cameras = ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam", "pancam", "minites"];
        const cameraGalleryAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cameras[0]}&api_key=${apiKey}`;
        fetch(cameraGalleryAPI)
          .then(res => res.json())
          .then(cameraGallery => {
            console.log(cameraGallery.photos);
            this.setState({
              cameraGallery: cameraGallery.photos[0],
              cameraInfo: cameraGallery.photos[0].camera
            });
          });
  }
  render() {
    return (
      <section>
        <p>{this.state.cameraGallery.earth_date}</p>
        <p>{this.state.cameraInfo.full_name}</p>
        <img src={this.state.cameraGallery.img_src} alt="img" />
      </section>
    );
  }
}

export default Pg2;
