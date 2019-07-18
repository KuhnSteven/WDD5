import React, {
  Component
} from 'react';
import '../App.css';

class Pg1 extends Component {
  state = {
    picofDay: [],
  };


  componentDidMount() {
    //Photo of the day
    const apiKey = `E6Ia87NnQyeFUYuqZqKTf9DzLO3WYlGcbmppB1uy`
    const picofDayAPI = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
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
    if (this.state.picofDay.media_type === "video") {
      return (
        <section>
          <p>{this.state.picofDay.title}</p>
          <p>Media File Type: {this.state.picofDay.media_type}</p>
          <a href={this.state.picofDay.url}>{this.state.picofDay.title}</a>
          <p>{this.state.picofDay.copyright}</p>
          <p>date: {this.state.picofDay.date}</p>
          <p>Video Text: {this.state.picofDay.explanation}</p>
        </section>
      )
    } else {
      return (
        <section >
          <p>{this.state.picofDay.title}</p>
          <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
          <p>{this.state.picofDay.copyright}</p>
          <p>date: {this.state.picofDay.date}</p>
          <p>Image Text: {this.state.picofDay.explanation}</p>
          <p>HD URL: {this.state.picofDay.hdurl}</p>
          <p>Media File Type: {this.state.picofDay.media_type}</p>
        </section>
      );
    }
  }
}

export default Pg1;