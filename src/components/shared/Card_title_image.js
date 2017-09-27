import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';
import LazyImage from '.LazyImage';

class CardTitleImage extends Component {

  render() {
    return (
      <Col xs={12} sm={6} md={3}>
        <div className='subSectioncardTI'>
          <div className='cardImage' style={{
            backgroundImage: `url(${this.props.imgSrc})`
          }}></div>
          <div className='cardTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>
        </div>
      </Col>
    );
  };
};

CardTitleImage.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  imgSrc: PropTypes.string
};

export default CardTitleImage;
