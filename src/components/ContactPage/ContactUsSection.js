import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import _ from "lodash";
import {Col} from 'react-bootstrap';

class ContactUs extends Component {

    renderLeft() {
      return _.map(this.props.ContactUsProps.cards, (Item,index) => {
        if (Item.name === 'contact-us-left-part')
        return (
          <div id={index} dangerouslySetInnerHTML={{__html: Item.content}}></div>
        );
      });
    }

    renderRight() {
      return _.map(this.props.ContactUsProps.cards, (Item,index) => {
        if (Item.name === 'contact-us-right-part')
        return (
          <div id={index} dangerouslySetInnerHTML={{__html: Item.content}}></div>
        );
      });
    }

    render() {
      return (
        <div className="ContactUs">
          <SubSectionHeader title = {this.props.ContactUsProps.title}/>
          <Col md={4} sm={6} xs={12}>
            <div>{this.renderLeft()}</div>
          </Col>
          <Col md={4} sm={6} xs={12}>
            <div>{this.renderRight()}</div>
          </Col>
        </div>

      )
    }
  }

  export default ContactUs;
