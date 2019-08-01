import React, {
  Component
} from 'react';

// js framework
import moment from 'moment';

// images & style
import {FaCompass} from 'react-icons/fa'
import {FaThermometerThreeQuarters} from 'react-icons/fa'
// import {FaThermometerQuarter} from 'react-icons/fa'
import {FaWind} from 'react-icons/fa'
import {FaWeightHanging} from 'react-icons/fa'

import insightArt from '../images/insightArt.jpg';
import '../App.css';

class Home extends Component {
  state = {
    picofDay1: [],
    picofDay2: [],
    picofDay3: [],
    picofDay4: [],
    picofDay5: [],

    solArray: [],
    solArray1: [],
    solArray2: [],
    solArray3: [],
    solArray4: [],
    solArray5: [],
    solArray6: [],

  };

  componentDidMount() {
    // Astronomy Photo of the day
    // the first APOD 1995-06-16
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`

    // get today's date, remove time, format to match APOD format using moment.js
    const todayDate = new Date();
    todayDate.setHours(0,0,0,0);
    let todayDateFormat = moment(todayDate, 'DDD MMM Do YYYY').format("YYYY-MM-DD");

    // End date logic
    let endDate = new Date();
    endDate.setDate(endDate.getDate()-4);
    endDate.setHours(0,0,0,0);
    let endDateFormat = moment(endDate, 'DDD MMM Do YYYY').format("YYYY-MM-DD");


    const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${endDateFormat}&end_date=${todayDateFormat}`;
    fetch(picofDayAPI)
      .then(res => res.json())
      .then(picofDay => {
        // console.log(picofDay)
        this.setState({
          picofDay1: picofDay[0],
          picofDay2: picofDay[1],
          picofDay3: picofDay[2],
          picofDay4: picofDay[3],
          picofDay5: picofDay[4]
        });
      });

        //Space Weather Activty
        const marsWeatherAPI = `https://mars.nasa.gov/rss/api/?feed=weather&category=insight&feedtype=json&ver=1.0`;
        fetch( marsWeatherAPI )
          .then( res => res.json() )
          .then( spaceWeather => {
            // console.log(spaceWeather);
            // Sol Keys array is Mars Sols (days) since Insight landing, 7 keys (days) are provided per group
            const weatherKeys = spaceWeather.sol_keys;
            let weatherKeyLength = weatherKeys.length;
    
    
            // State array to compact each sol's worth of data into an obj
            let solArray = [];
            for(let i = weatherKeyLength-1 ; i >= 0 ; i--){
              let solNumber = weatherKeys[i];
    
              let solObject = {};
              solObject.solNumber = solNumber;
              solObject.atMin = spaceWeather[solNumber].AT.mn;
              solObject.atMax = spaceWeather[solNumber].AT.mx;
              solObject.atAvg = spaceWeather[solNumber].AT.av;
    
              solObject.windDir = spaceWeather[solNumber].WD.most_common.compass_point;
              solObject.hwsMin = spaceWeather[solNumber].HWS.mn;
              solObject.hwsMax = spaceWeather[solNumber].HWS.mx;
              solObject.hwsAvg = spaceWeather[solNumber].HWS.av;
    
              solObject.preMin = spaceWeather[solNumber].PRE.mn;
              solObject.preMax = spaceWeather[solNumber].PRE.mx;
              solObject.preAvg = spaceWeather[solNumber].PRE.av;
              solArray.push(solObject);
            }
            // console.log("solArray",solArray);
            this.setState( {
              solArray: solArray[0],
              solArray1: solArray[1],
              solArray2: solArray[2],
              solArray3: solArray[3],
            } );
          } );
  }


  render() {

    return(
      <div>
        <section style={styles.carouselContainer}>
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>

            <div class="carousel-inner" style={styles.carouselBackground}>
              <div class="carousel-item active" style={styles.carouselImageCont}>
                <a href={this.state.picofDay5.hdurl}>
                  <img class="d-block mx-auto h-100 w-auto" src={this.state.picofDay5.url} alt="First slide" />
                </a>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{this.state.picofDay5.copyright} {this.state.picofDay5.date}</h5>
                  <h6>{this.state.picofDay5.title}</h6>
                </div>
              </div>

              <div class="carousel-item" style={styles.carouselImageCont}>
                <a href={this.state.picofDay4.hdurl}>
                  <img class="d-block m-auto h-100 w-auto" src={this.state.picofDay4.url} alt="Second slide" />
                </a>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{this.state.picofDay4.copyright} {this.state.picofDay4.date}</h5>
                  <h6>{this.state.picofDay4.title}</h6>
                </div>
              </div>

              <div class="carousel-item" style={styles.carouselImageCont}>
                <a href={this.state.picofDay3.hdurl}>
                  <img class="d-block m-auto h-100 w-auto" src={this.state.picofDay3.url} alt="Third slide" />
                </a>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{this.state.picofDay3.copyright} {this.state.picofDay3.date}</h5>
                  <h6>{this.state.picofDay3.title}</h6>
                </div>
              </div>

              <div class="carousel-item" style={styles.carouselImageCont}>
                <a href={this.state.picofDay2.hdurl}>
                  <img class="d-block mx-auto h-100 w-auto" src={this.state.picofDay2.url} alt="First slide" />
                </a>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{this.state.picofDay2.copyright} {this.state.picofDay2.date}</h5>
                  <h6>{this.state.picofDay2.title}</h6>
                </div>
              </div>

              <div class="carousel-item" style={styles.carouselImageCont}>
                <a href={this.state.picofDay1.hdurl}>
                  <img class="d-block mx-auto h-100 w-auto" src={this.state.picofDay1.url} alt="First slide" />
                </a>
                <div class="carousel-caption d-none d-md-block">
                  <h5>{this.state.picofDay1.copyright} {this.state.picofDay1.date}</h5>
                  <h6>{this.state.picofDay1.title}</h6>
                </div>
              </div>
              
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>

          {/* Weather section */}
          <section style={styles.weatherCenter}>
            <article style={styles.todaysWeather}>
              <img style={styles.insightBackground} src={insightArt} alt="Artist concept of the Insight lander."></img>
              <h1 style={styles.weatherCardTitle}>Mars Weather Center</h1>
              
              <h3 style={styles.weatherCardTitle}>TODAY</h3>
              <h3 style={styles.weatherCardTitle}>{moment(Date()).format("ddd, MMM/DD/YYYY")} - Sol {this.state.solArray.solNumber}</h3>
            
            <div style={styles.todayWeatherCards}>
              <div style={styles.weatherContainer}>
                <h2 style={styles.weatherCardHeader}>Temperature <FaThermometerThreeQuarters /></h2>
                <ul>
                  <li>
                    <p style={styles.todayWeatherP}>Max: {this.state.solArray.atMax}° F</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Avg: {this.state.solArray.atAvg}° F</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Min: {this.state.solArray.atMin}° F</p>
                  </li>
                </ul>

                <h2 style={styles.weatherCardHeader}>Wind <FaWind /></h2>
                <ul>
                  <li>
                    <p style={styles.todayWeatherP}>Avg Wind Direction: {this.state.solArray.windDir} <FaCompass /></p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Max: {this.state.solArray.hwsMax}mph</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Avg: {this.state.solArray.hwsAvg}mph</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Min: {this.state.solArray.hwsMin}mph</p>
                  </li>
                </ul>

                <h2 style={styles.weatherCardHeader}>Pressure <FaWeightHanging /></h2>
                <ul>
                  <li>
                    <p style={styles.todayWeatherP}>Max: {this.state.solArray.preMax}Pa</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Avg: {this.state.solArray.preAvg}Pa</p>
                  </li>
                  <li>
                    <p style={styles.todayWeatherP}>Min: {this.state.solArray.preMin}Pa</p>
                  </li>
                </ul>
              </div>
              <div style={styles.weatherInfoContainer}>
                <p>“Sol” is the term used to refer to a Martian day. A Mars
                sol lasts 24 hours, 39 minutes, and 35.244 seconds.</p>
                <p>The weather on Mars is extreme, with temperatures as frigid as
                -242.4 degrees Fahrenheit and as warm as 71.6 degrees
                Fahrenheit.</p>
                <p>The pressure on Mars is about 1% of Earth’s,
                with the atmosphere being primarily composed of Carbon
                Dioxide.</p>
                <a href="https://mars.nasa.gov/resources/7613/artists-concept-of-insight-lander-on-mars/" style={styles.InsightLink}>Artist Credit & Story Article</a>
              </div>
            </div>
            </article>


            {/* div container with days of weather */}
            <div style={styles.weatherReport}>
              <article style={styles.weatherCards}>
                <h4 style={styles.weatherCardTitle}>YESTERDAY</h4>
                <h5 style={styles.weatherCardHeader}>Temperature</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray1.atMax}° F</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray1.atAvg}° F</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray1.atMin}° F</p>

                <h5 style={styles.weatherCardHeader}>Wind</h5>
                    <p style={styles.weatherP}>Avg Direction: {this.state.solArray1.windDir}</p>
                    <p style={styles.weatherP}>Max: {this.state.solArray1.hwsMax}mph</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray1.hwsAvg}mph</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray1.hwsMin}mph</p>

                <h5 style={styles.weatherCardHeader}>Pressure</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray1.preMax}Pa</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray1.preAvg}Pa</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray1.preMin}Pa</p>
              </article>

              <article style={styles.weatherCards}>
                <h4 style={styles.weatherCardTitle}>2 DAYS AGO</h4>
                <h5 style={styles.weatherCardHeader}>Temperature</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray2.atMax}° F</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray2.atAvg}° F</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray2.atMin}° F</p>

                <h5 style={styles.weatherCardHeader}>Wind</h5>
                    <p style={styles.weatherP}>Avg Direction: {this.state.solArray2.windDir}</p>
                    <p style={styles.weatherP}>Max: {this.state.solArray2.hwsMax}mph</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray2.hwsAvg}mph</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray2.hwsMin}mph</p>

                <h5 style={styles.weatherCardHeader}>Pressure</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray2.preMax}Pa</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray2.preAvg}Pa</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray2.preMin}Pa</p>
              </article>

              <article style={styles.weatherCards}>
                <h4 style={styles.weatherCardTitle}>3 DAYS AGO</h4>
                <h5 style={styles.weatherCardHeader}>Temperature</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray3.atMax}° F</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray3.atAvg}° F</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray3.atMin}° F</p>

                <h5 style={styles.weatherCardHeader}>Wind</h5>
                    <p style={styles.weatherP}>Avg Direction: {this.state.solArray3.windDir}</p>
                    <p style={styles.weatherP}>Max: {this.state.solArray3.hwsMax}mph</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray3.hwsAvg}mph</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray3.hwsMin}mph</p>

                <h5 style={styles.weatherCardHeader}>Pressure</h5>
                    <p style={styles.weatherP}>Max: {this.state.solArray3.preMax}Pa</p>
                    <p style={styles.weatherP}>Avg: {this.state.solArray3.preAvg}Pa</p>
                    <p style={styles.weatherP}>Min: {this.state.solArray3.preMin}Pa</p>
              </article>
            </div>
          </section>
      </div>
    );
  //   if (this.state.picofDay.media_type === "video") {
  //     return (
  //       <section style={styles.carouselContainer}>
  //         <p>date: {this.state.picofDay.date}</p>
  //         <h1>{this.state.picofDay.title}</h1>
  //         <h1>Credit & Copyright - {this.state.picofDay.copyright}</h1>

  //         <a href={this.state.picofDay.hdurl}>
  //           <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
  //         </a>

  //         <p>Video Description: {this.state.picofDay.explanation}</p>
  //       </section>
  //     )
  //   } else {
  //     return (
  //       <section style={styles.carouselContainer}>
  //         <p>date: {this.state.picofDay.date}</p>
  //         <h1>{this.state.picofDay.title}</h1>
  //         <h1>Credit & Copyright - {this.state.picofDay.copyright}</h1>

  //         <a href={this.state.picofDay.hdurl}>
  //           <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
  //         </a>

  //         <p>Image Description: {this.state.picofDay.explanation}</p>
  //       </section>
  //     );
  //   }

  }
}

export default Home;

const styles = {
  carouselContainer: {
    padding: '1% 0 5%'
  },
  carouselBackground: {
    backgroundColor: 'black'
  },
  carouselImageCont: {
    height: '40rem',
    overflow: 'hidden'
  },
  weatherCenter: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    textAlign: 'left'
  },
  insightBackground: {
    width: '100%',
    position: 'absolute'
  },
  insightBackgroundContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%'
  },
  todaysWeather: {
    backgroundColor: 'grey',
    margin: '2%',
    position: 'relative',
    overflow: 'hidden'
  },
  todayWeatherCards: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  weatherContainer: {
    padding: '1% 4%',
    margin: '3%',
    backgroundColor: 'rgba(228,228,228,.58)',
    position:'relative',
    zIndex: '2',
    float: 'left',
  },
  weatherInfoContainer: {
    padding: '1% 4%',
    margin: '3%',
    backgroundColor: 'rgba(228,228,228,.58)',
    position:'relative',
    zIndex: '2',
    float: 'right',
  },
  insightLink: {
    position:'relative',
    zIndex: '2'
  },
  todayWeatherP: {
    position:'relative',
    zIndex: '2'
  },
  weatherP: {
    margin: '0'
  },
  weatherReport: {
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-evenly'

  },
  weatherCards: {
    backgroundColor: 'grey',
    width: 'fit-content',
    padding: '1%'
  },
  weatherCardTitle: {
    margin: '2% 0 0 0',
    color: 'white',
    textAlign: 'center',
    position:'relative',
    zIndex: '2'
  },
  weatherCardHeader: {
    margin: '2% 0 0 0',
    position:'relative',
    zIndex: '2'
  }
}