import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/about.css';

class RoundProfile extends Component {
  render() {
    return (
      <div>
        <img className="RoundProfile" src={this.props.ProfileUrl} alt=""/>
      </div>
    )
  }
}

export default RoundProfile;
