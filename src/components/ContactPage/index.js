import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import ServiceRequestsSection from './ServiceRequestsSection';
import RegistrationsSection from './RegistrationsSection';
import ReportingSection from './ReportingSection';
import GetInvolvedSection from './GetInvolvedSection';
import Complaints from './ComplaintsSection';
import ContactUs from './ContactUsSection';
import * as actions from '../../actions/actions_about';
import _ from "lodash";
import { connect } from 'react-redux';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';



class Contact extends Component {

  constructor(props, context) {
      super(props, context);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
      this.props.FetchContactData();
  }

  renderRequest(){
    if(this.props.ContactPageData !== undefined){
      return _.map(this.props.ContactPageData.data.sections.sections, item => {
        if(item.name === 'my-request-status') {
          return item.header;
        }
      });
    }
  }

  render() {

    let Contact = {};
    let BannerText = {};
    let ServiceRequestsProps = {};
    let ComplaintsProps = {};
    let RegistrationsProps = {};
    let ReportingProps = {};
    let GetInvolvedProps = {};
    let ContactUsProps = {};

    this.parseContactData(Contact, BannerText, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps, ContactUsProps, ReportingProps);

    return (
      <div>
        {<Banner text = {BannerText} />}
        <div className = 'SContainer'>
          <div className='sectionHeader SContainer'>{this.renderRequest()}</div>
          <div className='largeSearchBox'><SearchBoxCollection /></div>
        </div>
        <div className = 'container'>
          <ServiceRequestsSection ServiceRequestsProps = {ServiceRequestsProps}/>
        </div>
        <Row className='greyBcg'>
          <div className = 'getInvolvedContainer'>
            <GetInvolvedSection GetInvolvedProps = {GetInvolvedProps}/>
          </div>
        </Row>
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <Complaints ComplaintsProps = {ComplaintsProps} />
          </div>
        </div>
        <div className = 'container'>
          <RegistrationsSection RegistrationsProps = {RegistrationsProps}/>
        </div>
        <div className = 'greyBcg'>
          <div className = 'container'>
            <ReportingSection ReportingProps = {ReportingProps}/>
          </div>
        </div>
        <div className = 'SContainer'>
          <ContactUs ContactUsProps = {ContactUsProps}/>
        </div>
      </div>
    )
  }

  parseContactData(Contact, BannerText, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps, ContactUsProps, ReportingProps) {
    if(this.props.ContactPageData !== undefined){
        Contact = this.props.ContactPageData.data;
    }

    if(Contact !== undefined && Contact.sections != undefined) {

      BannerText.title = Contact.title;
      BannerText.content = Contact.header_content;
      
      _.map(Contact.sections.sections, item =>{
        switch (item.name){
          case 'service-request':{
            ServiceRequestsProps.title = item.header;
            ServiceRequestsProps.cards = item.cards;
            break;
          }
          case 'complaints': {
            ComplaintsProps.title = item.header;
            ComplaintsProps.content = item.content;
            break;
          }
          case 'applications-and-registrations': {
            RegistrationsProps.title = item.header;
            RegistrationsProps.cards = item.cards;
            RegistrationsProps.CardType = item.card_data.card_type;
            break;
          }
          case 'reporting': {
            ReportingProps.title = item.header;
            ReportingProps.cards = item.cards;
            ReportingProps.CardType = item.card_data.card_type;
            break;
          }
          case 'get-involved-section': {
            GetInvolvedProps.image = item.featured_image.base_path + item.featured_image.file;
            GetInvolvedProps.content = item.content;
            GetInvolvedProps.cards = item.cards;
            break;
          }
          case 'contact-us': {
            ContactUsProps.title = item.header;
            ContactUsProps.cards = item.cards;
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
    ContactPageData: state.AboutDataReducer.ContactPageData
  }
}

let actionList = {
  FetchContactData: actions.FetchContactData,
};

Contact = connect(mapStateToProps, actionList)(Contact)


export default Contact;
