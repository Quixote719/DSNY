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
    // this.successCallback = this.successCallback.bind(this)
  }
  componentWillMount() {
    this.props.AboutData();
    this.props.AboutLeadership();
  }
  // successCallback() {
  //   this.forceUpdate();
  // }
  render() {
    let AboutBigData = this.props.AboutBigData[0];
    let LeadershipBigData = this.props.LeadershipBigData;
    console.log('!@!');
    console.log(AboutBigData)
    console.log(LeadershipBigData);
    let BannerText = {};
    let ProfileUrl = '';
    console.warn('LeadershipBigData.source_url' + LeadershipBigData.source_url);
    if(AboutBigData != undefined){
      BannerText = {title: AboutBigData.title.rendered,
      content: AboutBigData.content.rendered}
    }
    if(LeadershipBigData != undefined){
      console.log(LeadershipBigData.source_url);
      ProfileUrl = LeadershipBigData.source_url;
      console.log('ProfileUrl:  ' + ProfileUrl)
    }

    return (
      <div>
        <Banner text = {BannerText}/>
        <RoundProfile ProfileUrl = {ProfileUrl}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    AboutBigData: state.AboutDataReducer.AboutBigData,
    LeadershipBigData: state.AboutDataReducer.LeadershipBigData
  }
}

let actionList = {
  AboutData: actions.AboutData,
  AboutLeadership: actions.AboutLeadership
};

About = connect(mapStateToProps, actionList)(About);

export default About;
