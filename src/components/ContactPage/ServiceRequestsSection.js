import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import CardBox from '../shared/card_box';
import TitleCard from '../shared/TitleCard';
import { Link } from 'react-router-dom';
import '../../content/styles/ContactPage.css';
import CardTitle from '../shared/Card_title';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class ServiceRequestsSection extends Component {

  constructor() {
    super();
  }

  renderCards() {
    return _.map(this.props.ServiceRequestsProps.cards, Item => {
      return (
        <div className='serviceRequestsCards' key={Item.id}>
          <CardTitle title={Item.title} key={Item.id} />
        </div>
      );
    });
  }

  render() {
    return (
        <div>
          <SubSectionHeader title={this.props.ServiceRequestsProps.title}/>
          <div className='container serviceRequestsContainer'>
            <Row>
              {this.renderCards()}
            </Row>
          </div>
        </div>
    );
  }
}


export default ServiceRequestsSection;
