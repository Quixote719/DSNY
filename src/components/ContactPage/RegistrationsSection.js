import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import '../../content/styles/ContactPage.css';
import CardTitle from '../shared/Card_title';
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CardType from '../shared/CardDetails/card_type'

class RegistrationsSection extends Component {

  renderCards() {

    return _.map(this.props.RegistrationsProps.cards, Item => {
      let l = (this.props.RegistrationsProps.cards.length);
      let style = l > 2
      ? 'FullWidth'
      : this.props.RegistrationsProps.content !== ''
        ? 'RightAlligned'
        : 'FullWidth'
  
    let cn = this.props.RegistrationsProps.background_color === 'gray'
      ? 'NBsubSectioncardType'
      : 'BsubSectioncardType'

      return (
        <div className='RegistrationsCards' key={Item.id}>
          <div><CardType style={style} className='BsubSectioncardType' title={Item.title}/></div>
        </div>
      );
    });
  }

  render() {
    return (
        <div>
          <SubSectionHeader title={this.props.RegistrationsProps.title}/>
          <div className='container RegistrationsContainer'>
            <Row>
              {this.renderCards()}
            </Row>
          </div>
        </div>
    );
  }
}


export default RegistrationsSection;
