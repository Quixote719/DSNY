import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import ContentCard from '../shared/ContentCard';
import ColorCard from '../shared/ColorCard';
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/dsnyCard.css';

class CardBox extends Component {

  renderCards(cards = []) {
    return _.map(cards, item => {
      let card = null;
      if(this.props.info.CardType==1){
          card = <TitleCard title={item.title} type='2' />
      }
      else if(this.props.info.CardType==2){
          card = <ColorCard title={item.title} content={item.content}/>
      }
      else{
          card = <ContentCard content={item.content}/>
      }
        return (
          <Col xs={12} sm={6} md={4} key={item.id}>
            {card}
          </Col>
        );
      })
  }

  ViewAllButton() {

  }

  render() {
    return (
      <div>
        <div>
          <div className="CardList">
            {this.renderCards(this.props.info.cards)}
          </div>
          {this.ViewAllButton()}
        </div>
      </div>
    );
  }
}


export default CardBox;
