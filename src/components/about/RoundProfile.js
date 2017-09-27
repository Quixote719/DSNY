import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/about.css';

class RoundProfile extends Component {

  render() {
      let that = this
    return (

      <div>
        <img className="RoundProfile" src={that.props.ProfileUrl} alt=""/>
      </div>
    )
  }
}

export default RoundProfile;
