import React, {
  Component
} from 'react';
import '../App.css';

class Trek extends Component {
  state = {
    // marsTrek: [],
  };


  componentDidMount() {
    // WMTS Mars Trek
    // const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    //   http://{WMTS endpoint}/1.0.0/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}.png
    // parse the WMTS GetCapabilities XML
    // const marsTrekAPI = `https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon`;
    // fetch( marsTrekAPI )
    //   .then(res => res.json())
    //   .then(marsTrek => {
    //     console.log(marsTrek);
    //     this.setState({
    //       marsTrek: marsTrek
    //     });
    //   });
  }



  render() {
    return (
      <section style={styles.sectionSt}>
        <h1>Mars Trek</h1>
        <p>Building on a heritage of supporting site selection and 
        analysis for the Constellation program, Mars Trek has been 
        developed to meet the needs of mission planners in a new era 
        of martian exploration. The online Web portal allows anyone with
          access to a computer to search through and view a vast number
           of martian images and other digital products.</p>
        <div style={styles.trekControls}>
          <h1 style={styles.controlHeader}>Map Controls</h1>
          <button class="mb-2 btn-primary" type="button" data-toggle="collapse" data-target="#collapseController" aria-expanded="false" aria-controls="collapseController">
            Map Toggles
          </button>

          {/* Map Toggles */}
          <div class="collapse" id="collapseController">
            <div class="card card-body" style={styles.controlsBackground}>
              <button class="my-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseViking" aria-expanded="false" aria-controls="collapseExample">
                Viking
              </button>
              <button class="my-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCurHi" aria-expanded="false" aria-controls="collapseExample">
                Atlas
              </button>
              <button class="my-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCurCTX" aria-expanded="false" aria-controls="collapseExample">
                Curiosity Landing Site
              </button>
              <button class="my-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCurHi" aria-expanded="false" aria-controls="collapseExample">
                Curiosity Landing Site 2
              </button>
              <button class="my-1 btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCurCTX" aria-expanded="false" aria-controls="collapseExample">
                Spirit Landing Site
              </button>
            </div>
            </div>
          </div>

      {/* Maps */}
        <div class="collapse" id="collapseViking">
          <div class="card card-body">
            <div style={styles.mapContainer}>
              <h1>Viking Mosaic</h1>
              <div style={styles.mapColumn}>
                <img src="https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0//default/default028mm/0/0/0.jpg" alt="" />
                <img src="https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m/1.0.0//default/default028mm/0/0/1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      
        <div class="collapse" id="collapseAtlas">
          <div class="card card-body">
            <div style={styles.mapContainer}>
              <h1>Atlas Mosaic (Mars Orbiter Camera)</h1>
              <div style={styles.mapColumn}>
                <div style={styles.mapRow}>
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/0/0.png" alt="" />
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/1/0.png" alt="" />
                </div>
                <div style={styles.mapRow}>
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/0/1.png" alt="" />
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/1/1.png" alt="" />
                </div>
                <div style={styles.mapRow}>
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/0/2.png" alt="" />
                  <img src="https://api.nasa.gov/mars-wmts/catalog/msss_atlas_simp_clon/1.0.0//default/default028mm/1/1/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse" id="collapseCurCTX">
          <div class="card card-body">
            <div style={styles.mapContainer}>
              <h1>Curiosity Landing Site (CTX Mosaic)</h1>
              <div style={styles.mapColumn}>
                <div style={styles.mapRow}>
                  <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_ctx_mosaic/1.0.0//default/default028mm/6/33/112.png" alt="" />
                  <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_ctx_mosaic/1.0.0//default/default028mm/6/34/112.png" alt="" />
                </div>
                <div style={styles.mapRow}>
                  <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_ctx_mosaic/1.0.0//default/default028mm/6/33/113.png" alt="" />
                  <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_ctx_mosaic/1.0.0//default/default028mm/6/34/113.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse" id="collapseCurHi">
          <div class="card card-body">

            <div style={styles.mapContainer}>
            <h1>Curiosity Landing Site (HiRISE Mosaic)</h1>
            <div style={styles.mapColumn}>
              <div style={styles.mapRow}>
                <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_hirise_mosaic/1.0.0//default/default028mm/9/268/902.png" alt="" />
                <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_hirise_mosaic/1.0.0//default/default028mm/9/269/902.png" alt="" />
              </div>
              <div style={styles.mapRow}>
                <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_hirise_mosaic/1.0.0//default/default028mm/9/268/903.png" alt="" />
                <img src="https://api.nasa.gov/mars-wmts/catalog/curiosity_hirise_mosaic/1.0.0//default/default028mm/9/269/903.png" alt="" />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div class="collapse" id="collapseSpirHi">
          <div class="card card-body">

          <div style={styles.mapContainer}>
          <h1>Spirit Landing Site (HiRISE Mosaic)</h1>
          <div style={styles.mapColumn}>
            <div style={styles.mapRow}>
              <img src="https://api.nasa.gov/mars-wmts/catalog/spirit_hirise_mosaic/1.0.0//default/default028mm/11/1189/4044.png" alt="" />
              <img src="https://api.nasa.gov/mars-wmts/catalog/spirit_hirise_mosaic/1.0.0//default/default028mm/11/1190/4044.png" alt="" />
            </div>
            <div style={styles.mapRow}>
              <img src="https://api.nasa.gov/mars-wmts/catalog/spirit_hirise_mosaic/1.0.0//default/default028mm/11/1189/4045.png" alt="" />
              <img src="https://api.nasa.gov/mars-wmts/catalog/spirit_hirise_mosaic/1.0.0//default/default028mm/11/1190/4045.png" alt="" />
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Trek;

const styles = {
  sectionSt: {
    backgroundColor: 'white',
    padding: '2%',
    textAlign: 'center'
  },
  trekControls: {
    position: 'fixed',
    zIndex: '2',
    transform: 'translate(-45px, -220px)',
    backgroundColor: 'rgba(250,250,250,.3)',
    border: '1px solid black',
    padding: '0 .5% 1%'
  },
  controlHeader: {
    backgroundColor: 'white',
    width: 'fit-content',
    margin: '2% auto',
    padding: '1% 7%'
  },
  controlsBackground: {
    display: 'flex',
    alignItems: 'baseline',
    backgroundColor: 'rgba(200,200,200,0.8)'
  },
  mapContainer: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    border: 'solid 1px black',
    margin: '1%',
    padding: '1%'
  },
  mapColumn: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'center'
  },
  mapRow: {
    display: 'flex',
    flexFlow: 'column'
  }
}