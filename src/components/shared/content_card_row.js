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
        <div className='contentRight'>{this.renderCards(dataObject.cards)}</div>
      </div>
    )
  }

  renderCards(cards = []){
    return _.map(cards, item => {
      return(
        <Col xs={12} sm={6} md={4} key={item.id}>
            <TitleContentCard title={item.title} link={item.linked_page.url} content={item.content}/>
        </Col>
      )
    })
  }
}

export default ContentCardRow;
