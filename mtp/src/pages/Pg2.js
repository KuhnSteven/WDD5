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
      <div>
      {/* Form + About */}
        <section style={styles.galleryControls}>
          <form style={styles.galleryControlsForm}>
            <fieldset style={styles.galleryControlsFieldsets}>
              <label>Camera -</label>
              <select id="cameraInput">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </fieldset>
            <fieldset style={styles.galleryControlsFieldsets}>
              <button type="submit">Search</button>
            </fieldset>
          </form>
          <div style={styles.galleryControlsAbout}>
            <p>In this image gallery you can find a collection of saved camera shots from the rovers on Mars. More information to be added later</p>
          </div>
        </section>

      {/* Gallery */}
        <section style={styles.galleryContainer}>
          <p>Earth Date (YYYY-MM-DD): {this.state.cameraGallery.earth_date}</p>
          <p>Camera: {this.state.cameraInfo.full_name}</p>
          <img src={this.state.cameraGallery.img_src} alt="img" style={styles.imageStyle}/>
        </section>
      </div>
    );
  }
}

export default Pg2;

const styles = {
  galleryControls: {
    padding: '2%',
    marginBottom: '2%',
    backgroundColor: 'white'
  },
  galleryControlsForm: {
    display: 'flex',
    flexFlow: 'row',
    width: '50%',
    padding: '1%',
    marginBottom: '2%',
    border: '1px black solid'
  },
  galleryControlsFieldsets: {
    display: 'flex',
    flexFlow: 'column',
    padding: '1%',
    marginBottom: '2%',
    border: '1px black solid'
  },
  galleryContainer: {
    marginTop: '2%',
    padding: '2%',
    backgroundColor: 'white'
  },
  imageStyle: {
    width: '100%',
    height: 'auto'
  }
}
