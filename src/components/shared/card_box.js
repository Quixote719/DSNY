import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import ColorCard from '../shared/ColorCard';
import { Row, Col } from 'react-bootstrap';
import '../../content/styles/dsnyCard.css';

class CardBox extends Component {

  renderCards(cards = []) {
    return _.map(cards, item => {
        return (
          <Col xs={12} sm={6} md={4} key={item.id}>
              <TitleCard title={item.title} type='2' />
          </Col>
        );
      })
  }

  ViewAllButton() {
    // if(this.props.info.cards.length>8)
      // return (<SubSectionButton title={this.props.info.cards}/>);
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
