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
import {Link} from "react-router-dom";
import PageText from '../../shared/PageText';



class Complaints extends Component {

  constructor(props, context) {
      super(props, context);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
      this.props.FetchComplaintsData();
  }

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
    let PageExplanation = {};

    this.parseComplaintsData(Complaints, BannerText, PageExplanation, AnimalsProps, EqualOpportunityProps, GraffitiProps, IllegalDumpingProps, LitterProps, LitterBasketsProps, RecyclingGarbageProps, StreetSideProps);

    return (
      <div>
        <div className="GBanner">
            <div className="BreadcrumbList">
              <div className="container">
                <ol role="navigation" aria-label="breadcrumbs" className="breadcrumb">
                  <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>Home</Link></li>
                  <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/contact"}>Contact</Link><span className='breadcrumbSymbol'>/</span></li>
                </ol>
              </div>
            </div>
            <div><div className="BreadcrumbHeaderTitleSection"><div className="container">Complaints</div></div></div>
        </div>
        <div className = 'SContainer'>
            <PageText PageExplanation = {PageExplanation} />
        </div>
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


  parseComplaintsData(Complaints, BannerText, PageExplanation, AnimalsProps, EqualOpportunityProps, GraffitiProps, IllegalDumpingProps, LitterProps, LitterBasketsProps, RecyclingGarbageProps, StreetSideProps) {
    if(this.props.ComplaintsPageData !== undefined){
        Complaints = this.props.ComplaintsPageData.data;
    }
    BannerText.title = Complaints.title;
    BannerText.content = Complaints.header_content;

    if(this.props.ComplaintsPageData !== undefined) {
      _.map(this.props.ComplaintsPageData.data.sections.sections, item =>{
        switch (item.name){
          case 'complaints-top':{
            PageExplanation.content = item.content;
            break;
          }
          case 'equal-employment-opportunity':{
            EqualOpportunityProps.title = item.header;
            EqualOpportunityProps.cards = item.cards;
            EqualOpportunityProps.CardType = item.card_data.card_type;
            break;
          }
          case 'recycling-garbage':{
            RecyclingGarbageProps.title = item.header;
            RecyclingGarbageProps.cards = item.cards;
            RecyclingGarbageProps.CardType = item.card_data.card_type;
            RecyclingGarbageProps.link = item.linked_url;
            break;
          }
          case 'illegal-dumping-vacant-lots':{
            IllegalDumpingProps.title = item.header;
            IllegalDumpingProps.cards = item.cards;
            IllegalDumpingProps.CardType = item.card_data.card_type;
            break;
          }
          case 'litter':{
            LitterProps.title = item.header;
            LitterProps.cards = item.cards;
            LitterProps.CardType = item.card_data.card_type;
            break;
          }
          case 'litter-baskets':{
            LitterBasketsProps.title = item.header;
            LitterBasketsProps.cards = item.cards;
            LitterBasketsProps.CardType = item.card_data.card_type;
            break;
          }
          case 'street-sidewalk-obstructions':{
            StreetSideProps.title = item.header;
            StreetSideProps.cards = item.cards;
            StreetSideProps.CardType = item.card_data.card_type;
            break;
          }
          case 'graffiti-posters':{
            GraffitiProps.title = item.header;
            GraffitiProps.cards = item.cards;
            GraffitiProps.CardType = item.card_data.card_type;
            break;
          }
          case 'animals':{
            AnimalsProps.title = item.header;
            AnimalsProps.cards = item.cards;
            AnimalsProps.CardType = item.card_data.card_type;
            break;
          }
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
