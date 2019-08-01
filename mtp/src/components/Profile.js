import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <article key={this.props.id} className="profile">
        <h5>{this.props.val.name}</h5>
        <p>{this.props.val.age}</p>
        <p style={styles.temp}></p>
      </article>
    );
  }
}

export default Profile;

const styles = {
  temp: {

  }
}