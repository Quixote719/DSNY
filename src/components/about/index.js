import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';
import RoundProfile from './RoundProfile';

class About extends Component {

  render() {
    const BannerText = {title:'About DSNY',
    content:'Lorem ipsum dolor sit amet consectetuer adipiscing elit enean commodo ligula eget dolorAenean massa. Cum sociis natoque penatibus.'}
    return (
      <div>
        <Banner text={BannerText}/>
      </div>
    )
  }
}

export default About;
