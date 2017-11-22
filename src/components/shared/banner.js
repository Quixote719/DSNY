import React, { Component } from 'react';
import '../../content/styles/banner.css';

class Banner extends Component {

  render() {

    return (
      <div className="GBanner">
        <div className="GTexture">
          <div className="GBannerTitle">{this.props.text.title}</div>
          <div className="GBannerContent" dangerouslySetInnerHTML={{__html: this.props.text.content}}></div>
        </div>
      </div>
    )
  }
}

export default Banner;
