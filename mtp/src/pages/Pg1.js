import React, {
  Component
} from 'react';
import moment from 'moment';
import '../App.css';

class Pg1 extends Component {
  state = {
    picofDay1: [],
    picofDay2: [],
    picofDay3: [],
    picofDay4: [],
    picofDay5: []
  };


  componentDidMount() {
    // Astronomy Photo of the day
    // the first APOD 1995-06-16
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`

    // get today's date, remove time, format to Korean YYYY. MM. DD. to match APOD format, replace '. ' with '-' and remove end '.'
    const todayDate = new Date();
    todayDate.setHours(0,0,0,0);
    let todayDateFormat = moment(todayDate, 'DDD MMM Do YYYY').format("YYYY-MM-DD");
    // console.log("API End Date (today):" + todayDateFormat);


    let endDate = new Date();
    endDate.setDate(endDate.getDate()-4);
    endDate.setHours(0,0,0,0);
    let endDateFormat = moment(endDate, 'DDD MMM Do YYYY').format("YYYY-MM-DD");
    // console.log("API Start Date (4 days ago):" + endDateFormat);


    // const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=1995-11-04`;
    const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${endDateFormat}&end_date=${todayDateFormat}`;
    fetch(picofDayAPI)
      .then(res => res.json())
      .then(picofDay => {
        console.log(picofDay);
        // console.log(picofDay[0]);
        // console.log(picofDay[4]);
        this.setState({
          picofDay1: picofDay[0],
          picofDay2: picofDay[1],
          picofDay3: picofDay[2],
          picofDay4: picofDay[3],
          picofDay5: picofDay[4]
        });
      });
  }



  render() {
    // Carousel Content Container & Media Type Logic

    return(
      <section style={styles.carouselContainer}>
        <p>APOD 5 days ago date: {this.state.picofDay1.date} title: {this.state.picofDay1.title}</p>
        <p>4 days ago date: {this.state.picofDay2.date} title: {this.state.picofDay2.title}</p>
        <p>3 days ago date: {this.state.picofDay3.date} title: {this.state.picofDay3.title}</p>
        <p>2 days ago date: {this.state.picofDay4.date} title: {this.state.picofDay4.title}</p>
        <p>today date: {this.state.picofDay5.date} title: {this.state.picofDay5.title}</p>
        
        <a href={this.state.picofDay5.hdurl}>
          <img style={styles.carouselImage} src={this.state.picofDay5.url} alt={this.state.picofDay5.title} />
        </a>

      </section>
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

export default Pg1;

const styles = {
  carouselContainer: {
    backgroundColor: 'white',
    padding: '5%'
  },
  carouselImage: {
    width: '100%'
  }
}