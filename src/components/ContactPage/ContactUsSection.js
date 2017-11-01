import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import _ from "lodash";

class ContactUs extends Component {

    renderLeft() {
      return _.map(this.props.ContactUsProps.cards, Item => {
        return (
          <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
        );
      });
    }

    render() {
      return (
        <div className="ContactUs">
          <SubSectionHeader title = {this.props.ContactUsProps.title}/>
          <div clssName="emailCommissioner">
            {this.renderLeft()}
          </div>
        </div>

      )
    }
  }

  export default ContactUs;
