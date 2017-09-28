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
    this.props.AboutBureaus();
    this.props.AboutStrategicPlan();
    this.props.AboutFoundation();
    this.props.AboutLocations();
    this.props.AboutOperations();
  }
  render() {
      let AboutBigData = this.props.AboutBigData.data;
      let LeadershipBigData = this.props.LeadershipBigData;
      let BureausBigData = this.props.BureausBigData.data;
      let StrategicPlanBigData = this.props.StrategicPlanBigData.data;
      let FoundationBigData = this.props.FoundationBigData.data;
      let LocationsBigData = this.props.LocationsBigData;
      let OperationsBigData = this.props.OperationsBigData;
      let BannerText = {};
      let ProfileUrl = '';
      let BureausTitle = '';
      let StrategicPlanProps = {};
      let FoundationTitle = '';

      if(AboutBigData != undefined){
        console.log('AboutBigData');
        console.log(AboutBigData);
        BannerText = {title: AboutBigData[0].title.rendered,
        content: AboutBigData[0].content.rendered}
      }
      if(LeadershipBigData != undefined){
        console.log('LeadershipBigData');
        console.log(LeadershipBigData);
        ProfileUrl = LeadershipBigData.source_url;
      }
      if(BureausBigData != undefined){
        console.log('BureausBigData');
        console.log(BureausBigData);
        BureausTitle = BureausBigData[0].title.rendered;
      }
      if(StrategicPlanBigData != undefined){
        console.log('StrategicPlanBigData');
        console.log(StrategicPlanBigData);
        StrategicPlanProps = {title: StrategicPlanBigData[0].title.rendered,
        content: StrategicPlanBigData[0].content.rendered}
      }
      if(FoundationBigData != undefined){
        console.log('FoundationBigData');
        console.log(FoundationBigData);
        FoundationBigData = FoundationBigData[0].title.rendered;
      }
      if(LocationsBigData != undefined){
        console.log('LocationsBigData');
        console.log(LocationsBigData);
      }
      if(OperationsBigData != undefined){
        console.log('OperationsBigData');
        console.log(OperationsBigData);
      }

      return (
        <div>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <Leadership title = 'Leadership' ProfileUrl = {ProfileUrl}/>
            <Bureaus BureausTitle = {BureausTitle}/>
            <StrategicPlan StrategicPlanProps = {StrategicPlanProps}/>
            <Foundation ProfileUrl = {ProfileUrl}/>
            <Locations ProfileUrl = {ProfileUrl}/>
            <Operations ProfileUrl = {ProfileUrl}/>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutBigData: state.AboutDataReducer.About.AboutBigData,
    LeadershipBigData: state.AboutDataReducer.About.LeadershipBigData,
    LocationsBigData: state.AboutDataReducer.About.LocationsBigData,
    OperationsBigData: state.AboutDataReducer.About.OperationsBigData,
    StrategicPlanBigData: state.AboutDataReducer.About.StrategicPlanBigData,
    BureausBigData: state.AboutDataReducer.About.BureausBigData,
    FoundationBigData: state.AboutDataReducer.About.FoundationBigData,
  }
}

let actionList = {
  AboutData: actions.AboutData,
  AboutLeadership: actions.AboutLeadership,
  AboutBureaus: actions.AboutBureaus,
  AboutStrategicPlan: actions.AboutStrategicPlan,
  AboutFoundation: actions.AboutFoundation,
  AboutLocations: actions.AboutLocations,
  AboutOperations: actions.AboutOperations,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
