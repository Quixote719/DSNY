import React, { Component } from 'react';
import '../../content/styles/RoundProfile.css';

class RoundProfile extends Component {
  render() {
    return (
        <img className="RoundProfile" src={this.props.ProfileUrl} alt=""/>
    )
  }
}

export default RoundProfile;
