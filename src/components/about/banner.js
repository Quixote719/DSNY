import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../content/styles/about.css';

class Banner extends Component {

  render() {

    return (
      <div className="GBanner">
        <div className="GTexture">
          <div className="GBannerTitle">{this.props.text.title}</div>
          <div className="GBannerContent">{this.props.text.content}</div>
        </div>
      </div>
    )
  }
}

export default Banner;
