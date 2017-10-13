import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import TitleContentCard from '../shared/TitleContentCard';
import ColorCard from '../shared/ColorCard';
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/dsnyCard.css';

class CardBox extends Component {

  renderCards(cards = []){
    return _.map(cards, item => {
        //  CardType: 1.TitleCard  2.ColorCard  3.ContentCard
        //  CardSize: 1.width:220px, 4 in a row    2.width:303px, 3 in a row
        let card = null;
        if(this.props.info.CardType==1){
            card = <TitleCard title={item.title} type='2' />
        }
        else if(this.props.info.CardType==2){
            card = <ColorCard title={item.title} content={item.content}/>
        }
        else{
            card = <TitleContentCard title={item.title} content={item.content}/>
        }

        if(this.props.info.CardSize == 1){
          return (
            <Col xs={12} sm={6} md={3} key={item.id}>
              {card}
            </Col>
          );
        }
        else{
          return (
            <Col xs={12} sm={6} md={4} key={item.id}>
              {card}
            </Col>
          );
        }
     })
  }

  ViewAllButton() {
      // if(this.props.info.cards.length<6){
      //
      // }
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
