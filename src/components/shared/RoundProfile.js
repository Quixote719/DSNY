import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/RoundProfile.css';

class RoundProfile extends Component {
  render() {
    return (
        <img className="RoundProfile" src={this.props.ProfileUrl} alt=""/>
    )
  }
}

export default RoundProfile;
