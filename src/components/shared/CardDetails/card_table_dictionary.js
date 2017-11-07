import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Link from './link'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import '../../../content/styles/dictionaryTableCard.css';
import Dotdotdot from 'react-dotdotdot'
import '../../../content/styles/cardType.css';
import moment from 'moment';
import Truncate from 'react-truncate';
import Parser from 'html-react-parser';

class TableDictionary extends Component{

 render() {
    return(
    <div >
        <Col>
          <Col xs={12} md={3}>           
              <div className='dictionaryCardTitle' >
                    <Truncate lines={3}>{Parser(this.props.title)}</Truncate>    
              </div>
              
          </Col>
          <Col xs={12} md={9}>
            <Row>
              <Col xs={12}>
                  <div className='dictionaryCardDesc'>
                   <Truncate lines={3}>  {Parser(this.props.body)} </Truncate>
                  </div>
                 
              </Col>
              <Col xs={12}>
                <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}${this.props.url}`}>
                  <div className='dictionaryBottomLink'>  {this.props.header} </div>
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


    }

}

TableDictionary.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.string,
  header:PropTypes.string
};


export default TableDictionary;