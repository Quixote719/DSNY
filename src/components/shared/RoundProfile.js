import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/banner.css';

class RoundProfile extends Component {

  render() {

    return (
      <div >
        <img className="RoundProfile" src={require('../../content/images/DSNY-Web_logo.png')} alt=""/>
        <img className="RoundProfile" src='http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg' alt=""/>
      </div>
    )
  }
}

export default RoundProfile;
