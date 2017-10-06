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
import LargeContentCard from '../shared/LargeContentCard';
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
    this.props.AboutSections();
  }
  render() {
      let AboutSections = this.props.AboutSectionsData.data;
      let About = this.props.AboutData.data;
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


      if(About != undefined){
        BannerText = {
                      title: About.header,
                      content: About.content
                     };
        About.sections.sections.map((item)=>{
            switch (item.name){
              case 'about-top':{
                PageExplanation = item.content;
                console.log('PageExplanation');
                console.log(PageExplanation);
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
                console.log('StrategicPlanProps');
                console.log(StrategicPlanProps);
                break;
              }
              case 'foundation':{
                FoundationProps.title = item.header;
                FoundationProps.content = item.content;
                FoundationCards = item.cards;
                console.log('cards');
                console.log(FoundationCards);
                break;
              }
              case 'about-locations':{
                LocationProps.image = item.image.file;
                LocationProps.content = item.content;
                LocationCards = item.cards;
                console.log('image');
                console.log(LocationProps.image);
                break;
              }
              case 'about-operations':{
                OperationProps.title = item.header;
                OperationProps.content = item.content;
                OperationCards = item.cards;
                console.log('operations');
                console.log(LocationProps);
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
          <div className = 'greyBcg boxPadding'>
            <div className = 'SContainer'>
              <BureausSection cards = {BureausCards}/>
            </div>
          </div>
          <div className = 'SContainer'>
             <StrategicPlanSection StrategicPlanProps = {StrategicPlanProps}/>
          </div>
          <div className = 'greyBcg boxPadding'>
            <div className = 'SContainer'>
             <FoundationSection FoundationProps={FoundationProps} FoundationCards={FoundationCards}/>
            </div>
          </div>
            <LocationsSection LocationProps = {LocationProps} LocationCards = {LocationCards}/>
          <div className = 'greyBcg boxPadding'>
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
    AboutData: state.AboutDataReducer.About.AboutData,
    AboutSectionsData: state.AboutDataReducer.About.AboutSectionsData
  }
}

let actionList = {
  About: actions.About,
  AboutSections: actions.AboutSections
};

About = connect(mapStateToProps, actionList)(About);

export default About;
