import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
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
    let MyRequestStatus = {};

    this.parseContactData(Contact, BannerText);

    return (
      <div>
        {<Banner text = {BannerText} />}
        <div className = 'SContainer'>
          {/* <div className="myRequestStatus">{MyRequestStatus}</div> */}
          <SearchBoxCollection />
        </div>
      </div>
    )
  }

  parseContactData(Contact, BannerText, MyRequestStatus) {
    if(this.props.ContactPageData !== undefined){
        Contact = this.props.ContactPageData.data; 
        // MyRequestStatus = this.props.ContactPageData.data.sections.sections.header;     
    }
    BannerText.title = Contact.title;
    BannerText.content = Contact.header_content;
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
