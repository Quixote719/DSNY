import React, { Component } from 'react';
import Banner from '../../shared/banner';
import AnimalsSection from './Animals';
import EqualOpportunitySection from './EqualOpportunity';
import GraffitiSection from './Graffiti';
import IllegalDumpingSection from './IllegalDumping';
import LitterSection from './Litter';
import LitterBasketsSection from './LitterBaskets';
import RecyclingGarbageSection from './RecyclingGarbage';
import StreetSidewalk from './StreetSidewalk';
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
import { connect } from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';



class Complaints extends Component {

  constructor(props, context) {
      super(props, context);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
      this.props.FetchComplaintsData();
  }

//   renderRequest(){
//     if(this.props.ComplaintsPageData !== undefined){
//       return _.map(this.props.ComplaintsPageData.data.sections.sections, item => {
//         if(item.name === 'my-request-status') {
//           return item.header;
//         }
//       });
//     }
//   }

  render() {

    let Complaints = {};
    let BannerText = {};
    let AnimalsProps = {};
    let EqualOpportunityProps = {};
    let GraffitiProps = {};
    let IllegalDumpingProps = {};
    let LitterProps = {};
    let LitterBasketsProps = {};
    let RecyclingGarbageProps = {};
    let StreetSideProps = {};

    this.parseComplaintsData(Complaints, BannerText, AnimalsProps, EqualOpportunityProps, GraffitiProps, IllegalDumpingProps, LitterProps, LitterBasketsProps, RecyclingGarbageProps, StreetSideProps);

    return (
      <div>
        {<Banner text = {BannerText} />}
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <EqualOpportunitySection EqualOpportunityProps = {EqualOpportunityProps}/>
          </div>
        </div>       
        <div className = 'SContainer'>
            <RecyclingGarbageSection RecyclingGarbageProps = {RecyclingGarbageProps}/>
        </div>   
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <IllegalDumpingSection IllegalDumpingProps = {IllegalDumpingProps} />
          </div>
        </div>
        <div className = 'SContainer'>
          <LitterSection LitterProps = {LitterProps}/>
        </div>
        <div className = 'SContainer'>
          <LitterBasketsSection LitterBasketsProps = {LitterBasketsProps}/>
        </div>
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <StreetSidewalk StreetSideProps = {StreetSideProps}/>
          </div>
          <div className = 'SContainer'>
            <GraffitiSection GraffitiProps = {GraffitiProps}/>
          </div>
          <div className = 'SContainer'>
            <AnimalsSection AnimalsProps = {AnimalsProps}/>
          </div>
        </div>
      </div>
    )
  }


  parseComplaintsData(Complaints, BannerText, AnimalsProps, EqualOpportunityProps, GraffitiProps, IllegalDumpingProps, LitterProps, LitterBasketsProps, RecyclingGarbageProps, StreetSideProps) {
    if(this.props.ComplaintsPageData !== undefined){
        Complaints = this.props.ComplaintsPageData.data;
    }
    BannerText.title = Complaints.title;
    BannerText.content = Complaints.header_content;

    if(this.props.ComplaintsPageData !== undefined) {
      _.map(this.props.ComplaintsPageData.data.sections.sections, item =>{
        switch (item.name){
          case 'equal-employment-opportunity':{
            EqualOpportunityProps.title = item.header;
            EqualOpportunityProps.cards = item.cards;
            EqualOpportunityProps.CardType = item.card_data.card_type;
            break;
          }
        //   case 'complaints': {
        //     ComplaintsProps.title = item.header;
        //     ComplaintsProps.content = item.content;
        //     break;
        //   }
        //   case 'applications-and-registrations': {
        //     RegistrationsProps.title = item.header;
        //     RegistrationsProps.cards = item.cards;
        //     RegistrationsProps.CardType = item.card_data.card_type;
        //     break;
        //   }
        //   case 'reporting': {
        //     ReportingProps.title = item.header;
        //     ReportingProps.cards = item.cards;
        //     ReportingProps.CardType = item.card_data.card_type;
        //     break;
        //   }
        //   case 'get-involved-section': {
        //     GetInvolvedProps.image = item.featured_image.base_path + item.featured_image.file;
        //     GetInvolvedProps.content = item.content;
        //     GetInvolvedProps.cards = item.cards;
        //     break;
        //   }
        //   case 'contact-us': {
        //     ContactUsProps.title = item.header;
        //     ContactUsProps.cards = item.cards;
        //     break;
        //   }
          default:{
            break;
          }
        }
      });
    }
  }
}

function mapStateToProps(state) {
  return {
    ComplaintsPageData: state.AboutDataReducer.ComplaintsPageData
  }
}

let actionList = {
    FetchComplaintsData: actions.FetchComplaintsData,
};

Complaints = connect(mapStateToProps, actionList)(Complaints)


export default Complaints;
