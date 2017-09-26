import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';
import RoundProfile from './RoundProfile';
import * as actions from '../../actions/Actions_About';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this)
    this.successCallback = this.successCallback.bind(this)
  }
  componentWillMount() {
    this.props.AboutData(this.successCallback);
  }
  successCallback() {
    this.forceUpdate();
  }
  render() {
    console.log(this.props.AboutBigData);
    const BannerText = {title:'About DSNY',
    content:'Lorem ipsum dolor sit amet consectetuer adipiscing elit enean commodo ligula eget dolorAenean massa. Cum sociis natoque penatibus.'}
    return (
      <div>
        <Banner text={BannerText}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    AboutBigData: state.AboutDataReducer.AboutBigData,
  }
}

let actionList = {
  AboutData: actions.AboutData,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
