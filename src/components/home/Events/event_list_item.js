import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../../content/styles/eventListItem.css';
import moment from 'moment';

class EventListItem extends Component {

  render() {

    return (
      <div >
        <Row>
          <Col xs={12} md={4}>
            <div className='PressReleaseDate'>{moment(this.props.date).format('dddd, MMMM Do, YYYY')}</div>
            {/*<div className='listItemTag'>Press Release #{this.props.prid}</div>*/}
          </Col>
          <Col xs={12} md={8}>
            <div >
              <Link className='PressReleaseTitle' to={`/pressRelease/${this.props.description}`}>
                {this.props.title}
              </Link>
            </div>
            <div className=''>{this.props.description}</div>
          </Col>
          
        </Row>
        {/*<div className='PRLIhairline'></div>*/}
        <div className='eventhairline'></div>
      </div>
    );
  };
};

export default EventListItem;
