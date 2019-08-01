import React, { Component } from 'react'
import '../App.css'
// import Image from '../components/Image'

// js framework
import moment from 'moment';

class Gallery extends Component {
  state = {
    cameraGallery0: [],
    cameraGallery: [],
    cameraInfo: [],
    cameraGallery2: [],
    cameraInfo2: [],
    cameraGallery3: [],
    cameraInfo3: [],

    // form values
    cameraInput: "fhaz",
    solInput: "999"
  }
  componentDidMount(){
        //Camera Gallery
        const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
        // const cameras = ["fhaz", "rhaz", "mast", "chemcam", "mahli", "mardi", "navcam", "pancam", "minites"];
        const cameraGalleryAPI = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${this.state.solInput}&camera=${this.state.cameraInput}&api_key=${apiKey}`;
        fetch(cameraGalleryAPI)
          .then(res => res.json())
          .then(cameraGallery => {
            // console.log(cameraGallery);

            this.setState({
              cameraGallery0: cameraGallery,
              cameraGallery: cameraGallery.photos[0],
              cameraInfo: cameraGallery.photos[0].camera,
              cameraGallery2: cameraGallery.photos[1],
              cameraInfo2: cameraGallery.photos[1].camera,
              cameraGallery3: cameraGallery.photos[2],
              cameraInfo3: cameraGallery.photos[2].camera,
            });
            // console.log(this.state.cameraGallery)
            // console.log(cameraGallery2)
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
      // console.log(this.state.cameraInput)
    }
    // let galleryResults = this.state.cameraGallery0
    // console.log(galleryResults)

    return (
      <div>
      {/* Form + About */}
        <section style={styles.galleryControls}>
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

          <form onSubmit={e =>onSubmit(e)} style={styles.galleryControlsForm}>
            <fieldset style={styles.galleryControlsFieldsets}>
              <label>Sol -</label>
              <input type="text" placeholder="999"></input>

              <label>Camera -</label>
              <select name="cameraInput" onChange={this.changeCamera} id="cameraInput">
                <option>Select Camera Input</option>
                <option value="fhaz">Front Hazard</option>
                <option value="rhaz">Rear Hazard</option>
                <option value="mast">Mast</option>
                <option value="chemcam">Chem/Cam Complex</option>
                <option value="mahli">Mahli</option>
                <option value="mardi">Mardi</option>
                <option value="navcam">Navigation Cam</option>
                <option value="pancam">Panoramic Cam</option>
                <option value="minites">Minites</option>
              </select>
            </fieldset>
            <fieldset style={styles.galleryControlsFieldsets}>
              <button type="submit">Search</button>
            </fieldset>
          </form>
        </section>

      {/* Gallery */}
\        <section style={styles.galleryContainer}>
        {/* {galleryResults} */}

      <div style={styles.imageContainer}>
        <h2>Earth Date: {moment(this.state.cameraGallery.earth_date, "YYYY-MM-DD").format("ddd, MMM/DD/YYYY")}</h2>
        <p>Camera: {this.state.cameraInfo.full_name}</p>
        <a href={this.state.cameraGallery.img_src}>
          <img src={this.state.cameraGallery.img_src} alt="" style={styles.imageStyle}/>
        </a>
      </div>

      <div style={styles.imageContainer}>
        <h2>Earth Date: {moment(this.state.cameraGallery2.earth_date, "YYYY-MM-DD").format("ddd, MMM/DD/YYYY")}</h2>
        <p>Camera: {this.state.cameraInfo2.full_name}</p>
        <a href={this.state.cameraGallery2.img_src}>
          <img src={this.state.cameraGallery2.img_src} alt="" style={styles.imageStyle}/>
        </a>
      </div>

      <div style={styles.imageContainer}>
        <h2>Earth Date: {moment(this.state.cameraGallery3.earth_date, "YYYY-MM-DD").format("ddd, MMM/DD/YYYY")}</h2>
        <p>Camera: {this.state.cameraInfo3.full_name}</p>
        <a href={this.state.cameraGallery3.img_src}>
          <img src={this.state.cameraGallery3.img_src} alt="" style={styles.imageStyle}/>
        </a>
      </div>

        </section>
      </div>
    );
  }
}

export default Gallery;

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
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    marginTop: '2%',
    padding: '2%',
    backgroundColor: 'white'
  },
  imageContainer: {
    border: 'solid 1px black',
    margin: '1%',
    width: '30%'
  },
  imageStyle: {
    width: '100%',
    height: 'auto'
  }
}
