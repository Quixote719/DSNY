import React, {Component} from "react";
import PropTypes from 'prop-types';
import '../../content/styles/PressReleaseHeader.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class PressReleaseHeader extends Component {
  render() {
    return (
      <div className='PressReleaseHeader'>
        <Row>
          <Col xs={12}>
            <div className='PressReleaseHeadertitle'>
              {this.props.title}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className='PressReleasedetailDate'>{this.props.date}</div>
          </Col>
          <Col xs={12} md={6}>
            <div className='PressReleasedetailStatus'>{this.props.status}</div>
          </Col>
          <Col xs={12}>
            <div className='patternLineGreen'></div>
          </Col>

        </Row>
      </div>

    );
  };
};

PressReleaseHeader.propTypes = {
  title: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string
};

export default PressReleaseHeader;
