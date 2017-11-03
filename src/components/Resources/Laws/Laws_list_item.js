import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';
import moment from 'moment';
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';

class LawsListItem extends Component {

  rawMarkup() {
    var rawMarkup = this.props.body;
    return {__html: rawMarkup};
  }

  render() {
    return (
      <div >
        <Col>
          <Col xs={12} md={3}>
           <TruncateMarkup lines={3}> 
              <div className='lawsTitle' >
                  {Parser(this.props.title)}
              </div>
            </TruncateMarkup>  
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <TruncateMarkup lines={3}> 
                  <div className='lawsDesc' >
                    {Parser(this.props.body)}
                  </div>
                </TruncateMarkup> 
              </Col>
              <Col xs={12}>
                <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}${this.props.url}`}>
                  <div className='lawsLink'>SEE ALL RULES</div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className='hairline'></div>
          </Col>
        </Col>

      </div>
    );
  };
};
LawsListItem.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string,
  url: PropTypes.string
};


export default LawsListItem;
