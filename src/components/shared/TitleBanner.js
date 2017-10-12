import React, { Component } from 'react';
import '../../content/styles/banner.css';

class TitleBanner extends Component {

  render() {

    return (
      <div className="TitleBanner">
        <div className="SGTexture">
          <div className="GBannerPath">{this.props.path}</div>
          <div className="GBannerTitle">Strategic Plan</div>
        </div>
      </div>
    )
  }
}

export default TitleBanner;
