import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import CardTitle from '../shared/Card_title';
import {Row} from 'react-bootstrap';

class RegistrationsSection extends Component {

  constructor() {
    super();
  }

  renderCards() {
    return _.map(this.props.RegistrationsProps.cards, Item => {
      return (
        <div className='RegistrationsCards' key={Item.id}>
          <CardTitle title={Item.title} key={Item.id} />

        </div>
      );
    });
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
