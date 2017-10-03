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

    this.props.AboutSections();
  }
  render() {
      let AboutSections = this.props.AboutSectionsData.data;

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

      return (
        <div>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <Leadership title = 'Leadership' LeadershipProps = {LeadershipProps}/>
          </div>
          <div className = 'GreyBcg'>
            <div className = 'SContainer'>
              <Bureaus/>
            </div>
          </div>
          <div className = 'SContainer'>
             <StrategicPlan StrategicPlanProps = {StrategicPlanProps}/>
          </div>
          <div className = 'GreyBcg'>
            <div className = 'SContainer'>
                  <Foundation FoundationProps = {FoundationProps}/>
            </div>
          </div>
          <div className = 'SContainer'>
            <Locations/>
          </div>
          <div className = 'GreyBcg'>
            <div className = 'SContainer'>
              <Operations/>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutSectionsData: state.AboutDataReducer.About.AboutSectionsData,
    // BureausBigData: state.AboutDataReducer.About.BureausBigData,
    // BureausDpBigData: state.AboutDataReducer.About.BureausDpBigData,
  }
}

let actionList = {
  AboutSections: actions.AboutSections,
  // AboutBureaus: actions.AboutBureaus,
  // AboutBureausDepartment: actions.AboutBureausDepartment,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
