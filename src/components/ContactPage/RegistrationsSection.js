import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import CardTitle from '../shared/Card_title';
import {Row} from 'react-bootstrap';
import CardSec from '../shared/CardDetails/card_sec'

class RegistrationsSection extends Component {

  renderCards() {
    let registrationData = this.props.RegistrationsProps;
      return (
        <div className='RegistrationsCards' key={registrationData.cards}>
          <CardSec dataObject={registrationData} />>

        </div>
      );

  }

  render() {
    return (
        <div>
          <SubSectionHeader title={this.props.RegistrationsProps.title}/>
          <div className='container RegistrationsContainer'>
            <Row>
              {this.renderCards()}
            </Row>
          </div>
        </div>
    );
  }
}


export default RegistrationsSection;
