import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col, Clearfix} from 'react-bootstrap';
import '../../content/styles/card.css';
import {Route, Redirect} from "react-router-dom";
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class CardTitle extends Component {

  constructor(){
    super();
    this.state ={
      expanded: false,
      truncated: false
    }
  }



  render() {
    console.log(this.props.cardIndex == (0 || 1));
    return (
      <Col xs={12} sm={6} md={3}>
      <div className={this.props.className}>
        <div className={this.props.cardIndex == 0 || this.props.cardIndex == 1 ? 'tabletIncrsdMargin' : ''}> </div>
        <div className='subSectioncardT' onClick={this.login}>
            <div className='CardTitleTextEmptyBody'>
              <Truncate lines={2}> {this.props.title} </Truncate> 
              </div>
        </div>
      </div>  
      </Col>
    );
  };
};

CardTitle.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  cardIndex:PropTypes.string,
};

export default CardTitle;
