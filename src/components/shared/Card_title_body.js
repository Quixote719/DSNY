import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import styles from '../../content/styles/card.css';
import TruncateMarkup from 'react-truncate-markup';
import Parser from 'html-react-parser';

class CardTitleBody extends Component {
  render() {
    return (
      <Col xs={12} sm={6} md={3}>
        <div className={this.props.className}>
          <div className='cardTitle'>
            <TruncateMarkup lines={2}> 
              <div className='cardTitleText' >
                  {Parser(this.props.title)}
              </div>
            </TruncateMarkup>  
          </div>
          <div className='cardBody'>
           <TruncateMarkup lines={2}> 
              <div className='cardBodyText' >
                  {Parser(this.props.body)}
              </div>
            </TruncateMarkup>  
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
