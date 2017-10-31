import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import ServiceRequestsSection from './ServiceRequestsSection';
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

    this.parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps);

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
            <div>1111</div>
          </div>
        </div>
      </div>
    )
  }



  parseContactData(Contact, BannerText, MyRequestStatus, ServiceRequestsProps) {
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
