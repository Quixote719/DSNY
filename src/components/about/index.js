import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../shared/banner';
import LargeContentCard from '../shared/LargeContentCard';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title';
import LargeCardTitle from '../shared/LargeCardTitle';
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
    this.props.AboutBureausDepartment();
    this.props.AboutStrategicPlan();
    this.props.AboutFoundation();
    this.props.AboutLocations();
    this.props.AboutOperations();
  }
  render() {
      let AboutBigData = this.props.AboutBigData.data;
      let LeadershipBigData = this.props.LeadershipBigData;
      let LeadershipImage = this.props.LeadershipImage;
      let BureausBigData = this.props.BureausBigData.data;
      let BureausDpBigData = this.props.BureausDpBigData.data;
      let StrategicPlanBigData = this.props.StrategicPlanBigData.data;
      let FoundationBigData = this.props.FoundationBigData.data;
      let LocationsBigData = this.props.LocationsBigData;
      let OperationsBigData = this.props.OperationsBigData;
      let BannerText = {};
      let LeadershipProps = {};
      let BureausTitle = '';
      let StrategicPlanProps = {};
      let FoundationTitle = '';

      console.log('!!!!!!!!432'+this.props.LeadershipBigData);

      if(AboutBigData != undefined){
        console.log('AboutBigData');
        console.log(AboutBigData);
        BannerText = {title: AboutBigData[0].title.rendered,
        content: AboutBigData[0].content.rendered}
      }
      if(LeadershipBigData != undefined){
        console.log('LeadershipBigData');
        console.log(LeadershipBigData);
        if(!(Object.keys(LeadershipBigData).length === 0 && LeadershipBigData.constructor === Object)){
          LeadershipProps.title = LeadershipBigData[0].title.rendered;
          LeadershipProps.content = LeadershipBigData[0].content.rendered;
        }

      }
      if(LeadershipImage != undefined){
        console.log('LeadershipImage');
        console.log(LeadershipImage);
        LeadershipProps.ProfileUrl = LeadershipImage.source_url;
      }
      if(BureausBigData != undefined){
        console.log('BureausBigData');
        console.log(BureausBigData);
        BureausTitle = BureausBigData[0].title.rendered;
      }
      if(BureausDpBigData != undefined){
        console.log('BureausDpBigData');
        console.log(BureausDpBigData);
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
            <Leadership title = 'Leadership' LeadershipProps = {LeadershipProps}/>

            <StrategicPlan StrategicPlanProps = {StrategicPlanProps}/>
            <Foundation/>
            <Locations/>
            <Operations/>
            <LargeContentCard/>
            <LargeContentCard/>
            <LargeContentCard/>
          </div>
          <div className = 'SContainer'>
            <LargeCardTitle/>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutBigData: state.AboutDataReducer.About.AboutBigData,
    LeadershipBigData: state.AboutDataReducer.About.LeadershipBigData,
    LeadershipImage: state.AboutDataReducer.About.LeadershipImage,
    LocationsBigData: state.AboutDataReducer.About.LocationsBigData,
    OperationsBigData: state.AboutDataReducer.About.OperationsBigData,
    StrategicPlanBigData: state.AboutDataReducer.About.StrategicPlanBigData,
    BureausBigData: state.AboutDataReducer.About.BureausBigData,
    BureausDpBigData: state.AboutDataReducer.About.BureausDpBigData,
    FoundationBigData: state.AboutDataReducer.About.FoundationBigData,
  }
}

let actionList = {
  AboutData: actions.AboutData,
  AboutLeadership: actions.AboutLeadership,
  AboutBureaus: actions.AboutBureaus,
  AboutBureausDepartment: actions.AboutBureausDepartment,
  AboutStrategicPlan: actions.AboutStrategicPlan,
  AboutFoundation: actions.AboutFoundation,
  AboutLocations: actions.AboutLocations,
  AboutOperations: actions.AboutOperations,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
