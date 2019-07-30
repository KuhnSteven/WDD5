import React, {
  Component
} from 'react';

// reactstrap
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

// js framework
import moment from 'moment';

// images & style
import insightArt from '../images/insightArt.jpg';
import marsPhoto from '../images/mars.jpg';
import rocketPhoto from '../images/spaceXFH.jpg';
import '../App.css';

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

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
  // constructor(props) {
  //   super(props);
  //   this.state = { activeIndex: 0 };
  //   this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);
  //   this.goToIndex = this.goToIndex.bind(this);
  //   this.onExiting = this.onExiting.bind(this);
  //   this.onExited = this.onExited.bind(this);
  // }

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
        console.log("APOD " + picofDay);
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
            } );
          } );
  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    // Carousel Content Container & Media Type Logic
    // const { activeIndex } = this.state;

    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >
    //       <img src={item.src} alt={item.altText} />
    //       <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //     </CarouselItem>
    //   );
    // });

    return(
      <div>
        <section style={styles.carouselContainer}>
          {/* <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel> */}
          <p>APOD 5 days ago date: {this.state.picofDay1.date} title: {this.state.picofDay1.title}</p>
          <p>4 days ago date: {this.state.picofDay2.date} title: {this.state.picofDay2.title}</p>
          <p>3 days ago date: {this.state.picofDay3.date} title: {this.state.picofDay3.title}</p>
          <p>2 days ago date: {this.state.picofDay4.date} title: {this.state.picofDay4.title}</p>
          <p>today date: {this.state.picofDay5.date} title: {this.state.picofDay5.title}</p>
          
          <a href={this.state.picofDay5.hdurl}>
            <img style={styles.carouselImage} src={this.state.picofDay5.url} alt={this.state.picofDay5.title} />
          </a>
        </section>

          {/* Short about section */}
        <section style={styles.aboutContainer}>
          <div style={styles.aboutDiv}>
            <h1>About Mars Travel Planner</h1>
            <p>Mars Travel Planner (MTP) was developed with the intent
            of making an application with little to no competitors,
            based in fanciful thought but built with factual data.</p>
            
            <p>MTP uses public data provided by NASA to report on Mars
            weather, photography from the Mars rovers, satellite imaging
            and more. While all of this information can be entertaining
            for hobbyists and useful for those getting ready to live
            amongst the rusty red hills, our travel planner is designed
            with the user in mind.</p>

            <p>Double check your packed belongings, make sure someone
            is booked to watch the house, and set a launch reminder via
            our calendar. It’s a brave new world out there in the deep
            dark bowels of space, make sure you’re not the cosmonaut who
            left home without their night light!</p>
          </div>
          <div style={styles.aboutImgDiv}>
            <img style={styles.aboutImg} src={rocketPhoto} alt="Space-X Falcon Heavy during lift off."></img>
          </div>
        </section>

          {/* Weather section */}
          <section style={styles.aboutContainer}>
            <div style={styles.aboutImgDiv}>
              <img style={styles.aboutImg} src={marsPhoto} alt="Mars art"></img>
            </div>
            <div style={styles.aboutDiv}>
              <h1>Mars Weather Center</h1>
              <p>“Sol” is the term used to refer to a Martian day. A Mars
              sol lasts 24 hours, 39 minutes, and 35.244 seconds. The
              weather on Mars is extreme, with temperatures as frigid as
              -242.4 degrees Fahrenheit and as warm as 71.6 degrees
              Fahrenheit. The pressure on Mars is about 1% of Earth’s,
              with the atmosphere being primarily composed of Carbon
              Dioxide.</p>
            </div>
          </section>
          <section style={styles.weatherCenter}>
            <article style={styles.todaysWeather}>
            <div>
              <img style={styles.insightBackground} src={insightArt} alt="Artist concept of the Insight lander."></img>
            </div>
              <h1 style={styles.weatherCardTitle}>TODAY</h1>
              <h1 style={styles.weatherCardTitle}>{moment(Date()).format("ddd, MMM/DD/YYYY")} - Sol {this.state.solArray.solNumber}</h1>
            
              <div style={styles.weatherContainer}>
                <h1 style={styles.weatherCardHeader}>Temperature</h1>
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

                <h1 style={styles.weatherCardHeader}>Wind</h1>
                <ul>
                  <li>
                    <p style={styles.todayWeatherP}>Avg Wind Direction: {this.state.solArray.windDir}</p>
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

                <h1 style={styles.weatherCardHeader}>Pressure</h1>
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

            <a href="https://mars.nasa.gov/resources/7613/artists-concept-of-insight-lander-on-mars/" style={styles.InsightLink}>Artist Credit & Story Article</a>
            </article>


            {/* div container with days of weather */}
            <div style={styles.weatherReport}>
              <article style={styles.weatherCards}>
                <h1 style={styles.weatherCardTitle}>YESTERDAY</h1>
                
              </article>

              <article style={styles.weatherCards}>
                <h1 style={styles.weatherCardTitle}>2 DAYS AGO</h1>
              </article>

              <article style={styles.weatherCards}>
                <h1 style={styles.weatherCardTitle}>3 DAYS AGO</h1>
                <h1 style={styles.weatherCardTitle}>Sol ?</h1>
                <h1 style={styles.weatherCardHeader}>Temp</h1>

                <h1 style={styles.weatherCardHeader}>Wind Speed</h1>

                <h1 style={styles.weatherCardHeader}>Barometric Pressure</h1>
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
    backgroundColor: 'white',
    padding: '5%'
  },
  carouselImage: {
    width: '100%'
  },
  aboutContainer: {
    display: 'flex',
  },
  aboutDiv: {
    backgroundColor: 'pink',
    display: 'flex',
    flexFlow: 'column',
    flexGrow: '3',
    margin: '1%',
    padding: '2%',
    maxWidth: '60%',
  },
  aboutImgDiv: {
    backgroundColor: 'pink',
    display: 'flex',
    flexGrow: '1',
    margin: '1%',
    padding: '2%',
    maxWidth: '40%',
    position: 'relative',
    overflow: 'hidden'
  },
  aboutImg: {
    width: '100%',
    position: 'relative',
    margin: 'auto 0%',
    padding: '5% 0%',
    borderTop: '5px solid white',
    borderBottom: '5px solid white'
  },
  weatherCenter: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-evenly',
    // backgroundColor: 'white',
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
  weatherContainer: {
    padding: '1% 4%',
    margin: '3%',
    backgroundColor: 'rgba(228,228,228,.58)',
    position:'relative',
    zIndex: '2',
    float: 'left',
  },
  insightLink: {
    position:'relative',
    zIndex: '2'
  },
  todayWeatherP: {
    position:'relative',
    zIndex: '2'
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