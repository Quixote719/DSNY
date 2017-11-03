import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import _ from "lodash";

class ContactUs extends Component {

    renderLeft() {
      return _.map(this.props.ContactUsProps.cards, Item => {
        if (Item.name === 'contact-us-left-part')
        return (
          <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
        );
      });
    }

    renderRight() {
      return _.map(this.props.ContactUsProps.cards, Item => {
        if (Item.name === 'contact-us-right-part')
        return (
          <div dangerouslySetInnerHTML={{__html: Item.content}}></div>
        );
      });
    }

    render() {
      return (
        <div className="ContactUs">
          <SubSectionHeader title = {this.props.ContactUsProps.title}/>
          <div className='contactUsDetails'>
            <div className='contactUsLeft'>{this.renderLeft()}</div>
            <div className='contactUsRight'>{this.renderRight()}</div>
          </div>
        </div>

      )
    }
  }

  export default ContactUs;
