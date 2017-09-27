import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/pressReleaseListItem.css';
import moment from 'moment';

class PressReleaseListItem extends Component {

  render() {

    return (
      <div >
        <Row>
          <Col xs={12} md={8}>
            <div className='PressReleaseTitle'>
              {this.props.title}
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className='PressReleaseDate'>{moment(this.props.date).format('dddd, MMMM Do, YYYY')}</div>
            <div className='listItemTag'>Press Release #{this.props.prid}</div>
          </Col>
        </Row>
        <div className='PRLIhairline'></div>
      </div>
    );
  };
};

export default PressReleaseListItem;
