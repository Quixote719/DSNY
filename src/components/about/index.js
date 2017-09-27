import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from './banner';
import RoundProfile from './RoundProfile';
import * as actions from '../../actions/Actions_About';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.AboutData();
    this.props.AboutLeadership();
  }
  render() {
    let AboutBigData = this.props.AboutBigData[0];
    let LeadershipBigData = this.props.LeadershipBigData;
    let BannerText = {};
    let ProfileUrl = '';
    if(AboutBigData != undefined){
      BannerText = {title: AboutBigData.title.rendered,
      content: AboutBigData.content.rendered}
    }
    if(LeadershipBigData != undefined){
      ProfileUrl = LeadershipBigData.source_url;
    }

    return (
      <div>
        <Banner text = {BannerText}/>
        <div className = 'SContainer'>
          <RoundProfile ProfileUrl = {ProfileUrl}/>
        </div>
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
