import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/banner.css';

class TitleBanner extends Component {

  render() {

    return (
      <div className="SmallBanner">
        <div className="GTexture">
          <div className="GBannerPath"></div>
          <div className="GBannerTitle">Strategic Plan</div>
        </div>
      </div>
    )
  }
}

export default TitleBanner;
