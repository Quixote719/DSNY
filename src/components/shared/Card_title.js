import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col, Clearfix} from 'react-bootstrap';
import '../../content/styles/card.css';
import {Route, Redirect} from "react-router-dom";
class CardTitle extends Component {

  login() {
    window.location.href = "/dashboard";
  }

  render() {
    return (
      <Col xs={12} sm={6} md={3}>
        <div className='subSectioncardT' onClick={this.login}>

          <div className='cardTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>
        </div>
      </Col>
    );
  };
};

CardTitle.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string
};

export default CardTitle;
