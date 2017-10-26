import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/locationDetails.css';

class LocationListItem extends Component {

  constructor(props, context) {
    super(props, context);
    this.renderCrossStreet = this.renderCrossStreet.bind(this);
  }

  renderCrossStreet() {
    if (this.props.crossStreet1 != "" && this.props.crossStreet2 != "") {
      return (
        <div>{this.props.crossStreet1}. & {this.props.crossStreet2}.</div>
      );
    }
    if(this.props.crossStreet1 != "" && this.props.crossStreet2 === "") {
      return (
        <div>at {this.props.crossStreet1}.</div>
      );
    }
    if(this.props.crossStreet2 != "" && this.props.crossStreet1 === "") {
      return (
        <div>at {this.props.crossStreet2}.</div>
      );
    }
  }

  render() {

    return(
      <Col xs={12} sm={6} md={3}>
        <div>
            <div className='locationDistrict'>
              <strong>{this.props.district}</strong>
              <div className='addressDetails'>
                {this.props.houseNumber} {this.props.streetName}.
              </div>
              <div className='crossStreetDetails'>
                {this.renderCrossStreet()}
              </div>
            </div>
          </div>
      </Col>
    );
  }
}


export default LocationListItem;
