import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/eventListItem.css';
import moment from 'moment';

class NewsListItem extends Component {

  render() {

    return (
      <Col xs={12} sm={6} md={3}>
        <div className='subSectioncardTI'>
          <div className='cardImage' style={{
            backgroundImage: `url(${this.props.image})`
          }}></div>
          <div className='cardTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>
        </div>
      </Col>
    );
  };
};

export default NewsListItem;
