import React, { Component } from 'react';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import TitleContentCard from '../shared/TitleContentCard';
import styles from '../../content/styles/services.css';

class ContentCardRow extends Component {
  render() {
    const {dataObject} = this.props;
    return (
      <div>
        <div className='contentLeft' dangerouslySetInnerHTML={{__html: dataObject.content}}></div>
        <div className='contentRight'>
          <Row>{this.renderCards(dataObject.cards, dataObject.background_color)}</Row>
        </div>
      </div>
    )
  }

  renderCards(cards = [], bcgColor){
    return _.map(cards, item => {
      return(
        <Col xs={12} sm={6} md={4} key={item.id}>
            <TitleContentCard dataObject = {item} type={(bcgColor==''||bcgColor=='white')?'narrow_border':'narrow'}/>
        </Col>
      )
    })
  }
}

export default ContentCardRow;
