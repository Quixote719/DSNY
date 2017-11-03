import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';
import LazyImage from './LazyImage';
import Parser from 'html-react-parser';
import TruncateMarkup from 'react-truncate-markup';


class CardTitleImage extends Component {

  render() {
    return (
      <Col xs={12} sm={6} md={4}>
        <div className='NsubSectioncardTI'>
          <div className='cardImage' style={{
            backgroundImage: `url(${this.props.ImgSrc})`
          }}></div>
          <div className='cardImageTitle'>
            <div className='cardTitleText'>{this.props.title}</div>
          </div>
          <div className ='cardImageBody'>
             <TruncateMarkup lines={3}> 
              <div className ='cardImageBodyText' >
                  {Parser(this.props.body)}
              </div>
              </TruncateMarkup>
          </div>
          </div>
      </Col>
    );
  };
};
 


CardTitleImage.propTypes = {
  body:PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  ImgSrc: PropTypes.string
};

export default CardTitleImage;
