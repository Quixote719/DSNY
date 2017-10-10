import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/banner.css';

class Banner extends Component {

  render() {

    return (
      <div className="SmallBanner">
        <div className="GTexture">
          <div className="GBannerPath"></div>
          <div className="GBannerTitle">{this.props.text.title}</div>
        </div>
      </div>
    )
  }
}

export default Banner;
