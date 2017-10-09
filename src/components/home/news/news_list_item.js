import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/newsListItem.css';
import moment from 'moment';

class NewsListItem extends Component {

  render() {
   if (this.props.itemCounter == 0) {
    return (
      <Col xs={12} sm={6} md={6} className='alignright newsSection'>
        <div className='newsSectiondDefaultcardTI'>
          <div className='defaultcardImage' style={{
            backgroundImage: `url(${this.props.image})`
          }}></div>
          {/*<div className='cardTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>*/}
        </div>
      </Col>
    );
   }
   else if (this.props.itemCounter == 99) {
    return (
      <Col xs={12} sm={6} md={6} className='alignright newsSection'>
        <div className='newsSectioncardTI'>
          {/*<div className='defaultcardImage' style={{
            backgroundImage: `url(${this.props.image})`
          }}></div>*/}
          <div className='defaultcardImage newscardTitle'>
            <div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>
            <div className='newscardTitleText'>{this.props.title}</div>
          </div>
        </div>
      </Col>
    );
   }
   else
   {
    return (
      <Col xs={12} sm={6} md={3} className='newsSection'>
        <div className='newsSectioncardTI'>
          <div className='newscardImage' style={{
            backgroundImage: `url(${this.props.image})`
          }}></div>
          <div className='newscardTitle'>
            <div className='newscardTitleDate'>{moment(this.props.date).format('MMMM D, YYYY')}</div>
            <div className='newscardTitleText'>{this.props.title}</div>
          </div>
        </div>
      </Col>
    );
   }
  };
};

export default NewsListItem;
