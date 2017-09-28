import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';

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
            <div className='lawsTitle'>{this.props.title}</div>
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                <div className='lawsDesc'>
                  {this.props.body}
                </div>
              </Col>
              <Col xs={12}>
                <div className='lawsLink'>SEE ALL RULES</div>
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
  className: PropTypes.string
};

export default LawsListItem;
