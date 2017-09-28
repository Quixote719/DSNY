import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';

class CardTitleBody extends Component {
  render() {
    return (
      <Col xs={12} sm={6} md={3}>
        <div className={this.props.className}>
          <div className='cardTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>
          <div className='cardBody'>
            <div className='cardBodyText'>{this.props.body}
            </div>
          </div>
        </div>
      </Col>
    );
  };
};

CardTitleBody.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string,
  className: PropTypes.string
};

export default CardTitleBody;
