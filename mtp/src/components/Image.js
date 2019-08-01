import React, { Component } from 'react';

// js framework
import moment from 'moment';

class Image extends Component {
  render() {
    return (
      <div style={styles.imageContainer}>
        <h2>Earth Date: {moment(this.state.cameraGallery.earth_date, "YYYY-MM-DD").format("ddd, MMM/DD/YYYY")}</h2>
        <p>Camera: {this.state.cameraInfo.full_name}</p>
        <a href={this.state.cameraGallery.img_src}>
          <img src={this.state.cameraGallery.img_src} alt="" style={styles.imageStyle}/>
        </a>
      </div>

    );
  }
}

export default Image;

const styles = {
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