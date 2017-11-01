import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import ServiceRequestsSection from './ServiceRequestsSection';
import RegistrationsSection from './RegistrationsSection';
import GetInvolvedSection from './GetInvolvedSection';
import Complaints from './ComplaintsSection';
import * as actions from '../../actions/actions_about';
import PageText from '../shared/PageText';
import _ from "lodash";
import { connect } from 'react-redux';



class Contact extends Component {

  constructor(props, context) {
      super(props, context);
      this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
      this.props.FetchContactData();
  }

  render() {

    let Contact = {};
    let BannerText = {};
    let MyRequestStatus = "";
    let ServiceRequestsProps = {};
    let ComplaintsProps = {};
    let RegistrationsProps = {};
    let GetInvolvedProps = {};



    this.parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps);

    return (
      <div>
        {<Banner text = {BannerText} />}
        <div className = 'SContainer'>
            <div className="myRequestStatus">{MyRequestStatus}</div>
          <SearchBoxCollection />
        </div>
        <div className = 'SContainer'>
          <ServiceRequestsSection ServiceRequestsProps = {ServiceRequestsProps}/>
        </div>
        <div className = 'greyBcg'>
          <div className = 'SContainer'>
            <Complaints ComplaintsProps = {ComplaintsProps} />
          </div>
        </div>
        <div className = 'SContainer'>
          <RegistrationsSection RegistrationsProps = {RegistrationsProps}/>
        </div>
          <GetInvolvedSection GetInvolvedProps = {GetInvolvedProps}/>

      </div>
    )
  }



  parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps, ComplaintsProps, RegistrationsProps, GetInvolvedProps) {
    if(this.props.ContactPageData !== undefined){
        Contact = this.props.ContactPageData.data;
    }
    BannerText.title = Contact.title;
    BannerText.content = Contact.header_content;

    if(this.props.ContactPageData !== undefined) {
      _.map(this.props.ContactPageData.data.sections.sections, item =>{
        switch (item.name){
          case 'my-request-status': {
            MyRequestStatus = item.header;
            break;
          }
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
            break;
          }
          case 'get-involved-section': {
            GetInvolvedProps.image = item.featured_image.base_path + item.featured_image.file;
            GetInvolvedProps.content = item.content;
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
