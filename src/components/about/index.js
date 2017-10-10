import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Banner from '../shared/banner';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/actions_about';
import CardTitle from '../shared/Card_title';
import TitleCard from '../shared/TitleCard';
import SubSectionHeader from '../shared/sub_section_header';
import PageText from '../shared/PageText';
import LeadershipSection from './LeadershipSection';
import LocationsSection from './LocationsSection';
import OperationsSection from './OperationsSection';
import StrategicPlanSection from './StrategicPlanSection';
import BureausSection from './BureausSection';
import FoundationSection from './FoundationSection';
import ContentCard from '../shared/ContentCard';
import TitleContentCard from '../shared/TitleContentCard';
import '../../content/styles/About.css';
import { connect } from 'react-redux';

class About extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.About();
  }
  test(About, BannerText, PageExplanation, LeadershipProps, BureausTitle, BureausCards, StrategicPlanProps,
   FoundationProps, FoundationCards, LocationProps, LocationCards, OperationProps, OperationCards){
     if(this.props.AboutData!=undefined){
             About = this.props.AboutData.data;
     }

       BannerText = {
                     title: About.header,
                     content: About.header_content
                    };
       if(About.sections!=undefined){
         About.sections.sections.map((item,i)=>{
             switch (item.name){
               case 'about-top':{
                 PageExplanation = item.content;
                 break;
               }
               case 'about-leadership':{
                 LeadershipProps.title = item.header;
                 LeadershipProps.content = item.content;
                 LeadershipProps.ProfileUrl = item.image.file;
                 break;
               }
               case 'about-bureaus':{
                 BureausTitle = item.header;
                 BureausCards = item.cards.slice(0, 6);
                 break;
               }
               case 'about-strategic-plan':{
                 StrategicPlanProps = {title: item.header, content: item.content};
                 break;
               }
               case 'foundation':{
                 FoundationProps.title = item.header;
                 FoundationProps.content = item.content;
                 FoundationCards = item.cards;
                 break;
               }
               case 'about-locations':{
                 LocationProps.image = item.image.file;
                 LocationProps.content = item.content;
                 LocationCards = item.cards;
                 break;
               }
               case 'about-operations':{
                 OperationProps.title = item.header;
                 OperationProps.content = item.content;
                 OperationCards = item.cards;
                 break;
               }
             }
         });
       }
  }
  render() {

      let About = {};
      let BannerText = {};
      let PageExplanation = {};
      let LeadershipProps = {};
      let BureausTitle = '';
      let BureausCards = [];
      let StrategicPlanProps = {};
      let FoundationProps = {};
      let FoundationCards = [];
      let LocationProps = {};
      let LocationCards = [];
      let OperationProps = {};
      let OperationCards = [];
      // this.test(About, BannerText, PageExplanation, LeadershipProps, BureausTitle, BureausCards, StrategicPlanProps,
      //  FoundationProps, FoundationCards, LocationProps, LocationCards, OperationProps, OperationCards);

    if(this.props.AboutData!=undefined){
            About = this.props.AboutData.data;
    }

      BannerText = {
                    title: About.header,
                    content: About.header_content
                   };
      if(About.sections!=undefined){
        About.sections.sections.map((item,i)=>{
            switch (item.name){
              case 'about-top':{
                PageExplanation = item.content;
                break;
              }
              case 'about-leadership':{
                LeadershipProps.title = item.header;
                LeadershipProps.content = item.content;
                LeadershipProps.ProfileUrl = item.image.file;
                break;
              }
              case 'about-bureaus':{
                BureausTitle = item.header;
                BureausCards = item.cards.slice(0, 6);
                break;
              }
              case 'about-strategic-plan':{
                StrategicPlanProps = {title: item.header, content: item.content};
                break;
              }
              case 'foundation':{
                FoundationProps.title = item.header;
                FoundationProps.content = item.content;
                FoundationCards = item.cards;
                break;
              }
              case 'about-locations':{
                LocationProps.image = item.image.file;
                LocationProps.content = item.content;
                LocationCards = item.cards;
                break;
              }
              case 'about-operations':{
                OperationProps.title = item.header;
                OperationProps.content = item.content;
                OperationCards = item.cards;
                break;
              }
            }
        });
      }



      return (
        <div>
          <Banner text = {BannerText}/>
          <div className = 'SContainer'>
            <PageText content = {PageExplanation} />
            <LeadershipSection title = 'Leadership' LeadershipProps = {LeadershipProps}/>
          </div>
          <div className = 'greyBcg'>
            <div className = 'SContainer'>
              <BureausSection cards = {BureausCards}/>
            </div>
          </div>
          <div className = 'SContainer'>
             <StrategicPlanSection StrategicPlanProps = {StrategicPlanProps}/>
          </div>
          <div className = 'greyBcg boxPaddingBtm'>
            <div className = 'SContainer'>
             <FoundationSection FoundationProps={FoundationProps} FoundationCards={FoundationCards}/>
            </div>
          </div>
            <LocationsSection LocationProps = {LocationProps} LocationCards = {LocationCards}/>
          <div className = 'greyBcg boxPaddingBtm'>
            <div className = 'SContainer'>
              <OperationsSection OperationProps = {OperationProps} OperationCards={OperationCards}/>
            </div>
          </div>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    AboutData: state.AboutDataReducer.AboutData,
  }
}

let actionList = {
  About: actions.About,
};

About = connect(mapStateToProps, actionList)(About);

export default About;
