import React, { Component } from 'react';
import '../App.css';

class Pg2 extends Component {
  state = {
    cameraGallery: [],
    cameraInfo: [],
    cameraInput: "fhaz"
  }
  componentDidMount(){
        //Camera Gallery
        const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
        // const cameras = ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam", "pancam", "minites"];
        const cameraGalleryAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${this.state.cameraInput}&api_key=${apiKey}`;
        fetch(cameraGalleryAPI)
          .then(res => res.json())
          .then(cameraGallery => {
            console.log(cameraGallery);
            this.setState({
              cameraGallery: cameraGallery.photos,
              cameraInfo: cameraGallery.photos.camera
            });
          });
  }

changeCamera = e =>{
  e.preventDefault();
  this.setState({cameraInput: e.target.value})
  console.log(this.state.cameraInput)
}

  render() {
    const onSubmit = e =>{
      e.preventDefault();
      console.log(this.state.cameraInput)
    }
    return (
      <div>
      {/* Form + About */}
        <section style={styles.galleryControls}>
          <form onSubmit={e =>onSubmit(e)} style={styles.galleryControlsForm}>
            <fieldset style={styles.galleryControlsFieldsets}>
              {/* <label>Sol -</label>
              <input type="text" placeholder="Sol date"></input> */}

              <label>Camera -</label>
              <select name="cameraInput" onChange={this.changeCamera} id="cameraInput">
              <option>Select Camera Input</option>
                <option value="fhaz">Front Hazard</option>
                <option value="rhaz">Rear Hazard</option>
                <option value="mast">Mast</option>
                <option value="chemchem">ChemChem</option>
                <option value="mahli">Mahli</option>
                <option value="mardi">Mardi</option>
                <option value="navcam">NavCam</option>
                <option value="pancam">PanCam</option>
                <option value="minites">Minites</option>
              </select>
            </fieldset>
            <fieldset style={styles.galleryControlsFieldsets}>
              <button type="submit">Search</button>
            </fieldset>
          </form>
          <div style={styles.galleryControlsAbout}>
          <h1>Camera Gallery</h1>
            <p>Thanks to the free publishing rights for all of NASA’s rover
            photography and integration within their API framework, Mars
            Travel Planner is able to provide users with streamlined access
            to images of Mars through the eyes of the intrepid Curiosity,
            Opportunity, or Spirit.</p>

            <p>Each rover has front & rear hazard avoidance cameras and
            navigation cameras. Spirit and Opportunity both have the
            distinction of the only panoramic cameras and thermal emission
            spectrometers. Curiosity instead has access to: it’s central
            mast camera, the chemistry and camera complex, the Mars Hand
            Lens Imager, and the Mars Descent Imager.</p>

            <p>To search for images, simply indicate what sol (Mars day)
            you want to check, which cameras you’d like to see images from,
            and hit the search button! If you want to know more about the
            picture, simply click for a link to the source, so long as one
            is provided.</p>
          </div>
        </section>

      {/* Gallery */}
        {/* <section style={styles.galleryContainer}>
          <p>Earth Date (YYYY-MM-DD): {this.state.cameraGallery.earth_date}</p>
          <p>Camera: {this.state.cameraInfo.full_name}</p>
          <img src={this.state.cameraGallery.img_src} alt="img" style={styles.imageStyle}/>
        </section> */}
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
