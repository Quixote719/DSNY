import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../shared/banner';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title';
import SubSectionHeader from '../shared/sub_section_header';
import Leadership from './Leadership';
import Locations from './Locations';
import Operations from './Operations';
import StrategicPlan from './StrategicPlan';
import Bureaus from './Bureaus';
import Foundation from './Foundation';

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
            <Leadership ProfileUrl = {ProfileUrl}/>
            <Locations ProfileUrl = {ProfileUrl}/>
            <Operations ProfileUrl = {ProfileUrl}/>
            <StrategicPlan ProfileUrl = {ProfileUrl}/>
            <Bureaus ProfileUrl = {ProfileUrl}/>
            <Foundation ProfileUrl = {ProfileUrl}/>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutBigData: state.AboutDataReducer.About.AboutBigData,
    LeadershipBigData: state.AboutDataReducer.About.LeadershipBigData
  }
}

let actionList = {
  AboutData: actions.AboutData,
  AboutLeadership: actions.AboutLeadership
};

About = connect(mapStateToProps, actionList)(About);

export default About;
