import React, {
  Component
} from 'react';
import '../App.css';

class Pg4 extends Component {
  state = {
    marsTrek: [],
  };


  componentDidMount() {
    // WMTS Mars Trek
    // const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    //   http://{WMTS endpoint}/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png
    // parse the WMTS GetCapabilities XML
    const marsTrekAPI = `https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m`;
    fetch( marsTrekAPI )
      .then(res => res.json())
      .then(marsTrek => {
        console.log(marsTrek);
        this.setState({
          marsTrek: marsTrek
        });
      });
  }



  render() {
      return (
        <section style={styles.mapContainer}>
          <h1>Map</h1>
          <img src="https://api.nasa.gov/mars-wmts/catalog/Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly/1.0.0/default/default028mm/0/0/0.jpg" alt="" />
          <img src="https://api.nasa.gov/mars-wmts/catalog/Mars_MO_THEMIS-IR-Day_mosaic_global_100m_v12_clon0_ly/1.0.0/default/default028mm/0/0/1.jpg" alt="" />
        </section>
    );
  }
}

export default Pg4;

const styles = {
  mapContainer: {
    backgroundColor: 'white',
    padding: '2%',
    textAlign: 'center'
  }
}