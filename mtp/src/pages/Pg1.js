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
    return ( <section >
      <p>{this.state.picofDay.copyright}</p>
      <p>{this.state.picofDay.date}</p>
      <p>{this.state.picofDay.explanation}</p>
      <p>{this.state.picofDay.hdurl}</p>
      <p>{this.state.picofDay.media_type}</p>
      <p>{this.state.picofDay.title}</p>
      <img src={this.state.picofDay.url} alt={this.state.picofDay.title} />
      </section>
    );
  }
}

export default Pg1;