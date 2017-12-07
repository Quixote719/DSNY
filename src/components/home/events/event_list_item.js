import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Row, Col} from 'react-bootstrap';
import styles from '../../../content/styles/eventListItem.css';
import moment from 'moment';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class EventListItem extends Component {

  render() {

    return (
      <div >
        <Row>
          <Col xs={2} md={2}>
            <div id="eventsTextureSquare">
                <div id="innersquare">
                    <div className='eventBoro'>{this.props.boro.toUpperCase().substr(0,2)}</div>
                    {/*Date Formats such as 02-09 will be displayed as 2.9 using the format and replace function below */}
                    <div className='eventDate'>{moment(this.props.date).format('MM.D').replace(/(^|-)0+/g, "$1")}</div>
                </div>
            </div>
            {/*<div className='listItemTag'>Press Release #{this.props.prid}</div>*/}
          </Col>
          <Col xs={10} md={10}>
            <div className="EventTCDiv">
              <div>
                <Link className='eventTitle' to={process.env.REACT_APP_SITE_RELATIVE_URL + `/eventdetail/${this.props.eventid}`}>
                  {this.props.title}
                </Link>
              </div>
                <div className='eventDescription'> 
                  <Truncate lines={2}>  {Parser(this.props.description)}</Truncate>
                </div>
            </div>
          </Col>

        </Row>
        {/*<div className='PRLIhairline'></div>*/}
        <div className='eventhairline'></div>
      </div>
    );
  };
};

export default EventListItem;
