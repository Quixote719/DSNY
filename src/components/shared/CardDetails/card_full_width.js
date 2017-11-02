import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Link from './link'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/cardType.css';
import moment from 'moment';

class cardFullWidth extends Component {

  cardLayout(cardDetails) {
    if (cardDetails) {

      let {link} = this.props;
      let title;
      if (cardDetails.title != '') {
        title = (<div key={cardDetails.id}>
          <Col xs={12}>
            {
              link
                ? <Link className='fullwidthcardtitle' to={link}><div dangerouslySetInnerHTML={{
                      __html: cardDetails.title
                    }}/></Link>
                : <div className='fullwidthcardtitle' dangerouslySetInnerHTML={{
                      __html: cardDetails.title
                    }}/>
            }
          </Col>
        </div>)
      }

      let body;
      if (cardDetails.content != '') {
        body = (<div key={cardDetails.id}>
          <Col xs={12}>
            <div >
              <div dangerouslySetInnerHTML={{
                  __html: cardDetails.content
                }}/>
            </div>
          </Col>
        </div>)
      }

      return (<div>
        <Row>
          <div>{title}</div>
          <div>{body}</div>
        </Row>
        <div className='PRLIhairline'></div>
      </div>);

    }
  }

  render() {
    const {dataObject} = this.props;
    return (<Col xs={12}>{this.cardLayout(dataObject)}</Col>);
  };
};

cardFullWidth.propTypes = {
  dataObject: PropTypes.object,
  link: PropTypes.string,
  className: PropTypes.string
};

export default cardFullWidth;
