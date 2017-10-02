import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../shared/banner';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title';
import TitleCard from '../shared/TitleCard';
import SubSectionHeader from '../shared/sub_section_header';
import Leadership from './Leadership';
import Locations from './Locations';
import Operations from './Operations';
import StrategicPlan from './StrategicPlan';
import Bureaus from './Bureaus';
import Foundation from './Foundation';
import LargeContentCard from '../shared/LargeContentCard';
import TitleContentCard from '../shared/TitleContentCard';

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
    this.props.AboutSections();
  }
  render() {
      let AboutSections = this.props.AboutSectionsData.data;
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
      let FoundationProps = {};


      console.log('AboutSections');
      console.log(AboutSections);

      if(AboutSections != undefined){
        console.log(AboutSections);
        AboutSections.map((item)=>{
          if(item.categories.length>1){
            switch (item.categories[1]){
              case 32:                      // Bureaus
                BureausTitle = item.title.rendered;
                break;
              case 34:                      // Foundation
                FoundationProps.title = item.title.rendered;
                FoundationProps.content = item.content.rendered;
                console.log('FoundationProps');
                  console.log(FoundationProps);
                break;
              case 35:                      // Locations
                break;
              case 36:                      // Operations
                break;
              case 73:                      // Leadership
                LeadershipProps.title = item.title.rendered;
                LeadershipProps.content = item.content.rendered;
                LeadershipProps.ProfileUrl = item.feature_image.guid;
                break;
              case 76:                      // Strategic Plan
                StrategicPlanProps = {title:item.title.rendered,
                content: item.content.rendered};
                break;
            }
          }
          else{
            BannerText = {title: item.title.rendered,
            content: item.content.rendered}
          }
        })
      }

      // if(AboutBigData != undefined){
      //   console.log('AboutBigData');
      //   console.log(AboutBigData);
      //   BannerText = {title: AboutBigData[0].title.rendered,
      //   content: AboutBigData[0].content.rendered}
      // }
      // if(LeadershipImage != undefined){
      //   console.log('LeadershipImage');
      //   console.log(LeadershipImage);
      //   LeadershipProps.ProfileUrl = LeadershipImage.source_url;
      // }
      if(BureausBigData != undefined){
        console.log('BureausBigData');
        console.log(BureausBigData);
        BureausTitle = BureausBigData[0].title.rendered;
      }
      if(BureausDpBigData != undefined){
        console.log('BureausDpBigData');
        console.log(BureausDpBigData);
      }

      return (
        <div>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <Leadership title = 'Leadership' LeadershipProps = {LeadershipProps}/>
            <Bureaus/>
            <StrategicPlan StrategicPlanProps = {StrategicPlanProps}/>
            <Foundation FoundationProps = {FoundationProps}/>
            <Locations/>
            <Operations/>
            <LargeContentCard type = '1'/>
            <LargeContentCard type = '2'/>
          </div>
          <div className = 'SContainer'>
            <TitleCard type = '1'/>
            <br/>
            <TitleCard type = '2'/>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutSectionsData: state.AboutDataReducer.About.AboutSectionsData,
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
  AboutSections: actions.AboutSections,
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
