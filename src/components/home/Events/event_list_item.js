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
          <Col xs={2} md={2}>
            <div id="eventsTextureSquare">
                <div id="innersquare">
                    <div className='eventBoro'>{this.props.boro.toUpperCase().substr(0,2)}</div>
                    <div className='eventDate'>{moment(this.props.date).format('MM.D')}</div>
                </div>
            </div>
            {/*<div className='listItemTag'>Press Release #{this.props.prid}</div>*/}
          </Col>
          <Col xs={10} md={10}>
            <div >
              <Link className='eventTitle' to={`/eventDetails/${this.props.eventid}`}>
                {this.props.title}
              </Link>
            </div>
            <div className='eventDescription'>{this.props.description}</div>
          </Col>
          
        </Row>
        {/*<div className='PRLIhairline'></div>*/}
        <div className='eventhairline'></div>
      </div>
    );
  };
};

export default EventListItem;
