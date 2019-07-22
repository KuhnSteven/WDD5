import React, {
  Component
} from 'react';
import '../App.css';

class Pg1 extends Component {
  state = {
    picofDay: [],
  };


  componentDidMount() {
    // Astronomy Photo of the day
    // the first APOD 1995-06-16
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=1995-11-04`;
    fetch(picofDayAPI)
      .then(res => res.json())
      .then(picofDay => {
        console.log(picofDay);
        this.setState({
          picofDay: picofDay
        });
      });
  }



  render() {
    // Carousel Content Container & Media Type Logic

    if (this.state.picofDay.media_type === "video") {
      return (
        <section>
          <p>date: {this.state.picofDay.date}</p>
          <h1>{this.state.picofDay.title}</h1>
          <h1>Credit & Copyright - {this.state.picofDay.copyright}</h1>

          <a href={this.state.picofDay.hdurl}>
            <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
          </a>

          <p>Video Description: {this.state.picofDay.explanation}</p>
        </section>
      )
    } else {
      return (
        <section >
          <p>date: {this.state.picofDay.date}</p>
          <h1>{this.state.picofDay.title}</h1>
          <h1>Credit & Copyright - {this.state.picofDay.copyright}</h1>

          <a href={this.state.picofDay.hdurl}>
            <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
          </a>

          <p>Image Description: {this.state.picofDay.explanation}</p>
        </section>
      );
    }

  }
}

export default Pg1;