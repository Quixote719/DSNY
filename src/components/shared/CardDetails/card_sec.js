import _ from "lodash";
import React, {Component} from "react";
import Link from './link'
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';
import SubSectionHeader from '../sub_section_header';
import CardType from './card_type'
import CardTitleBody from '../Card_title_body'

class CardSec extends Component {

  CardType(cardType, Item) {

    let url;
    let type;
    if (Item.linked_url !== " ") {
      type = 'eUrl';
      url = Item.linked_url
    }

    if (Item.linked_file) {
      let fileLink = Item.linked_file.file;
      if (_.includes(fileLink, '.pdf')) {
        type = 'pdf'
      }
      if (_.includes(fileLink, '.xlsx')) {
        type = 'xlsx'
      }
      if (_.includes(fileLink, '.zip')) {
        type = 'zip'
      }
      url = Item.linked_file.file
    }

    if (Item.linked_page) {
      type = 'iUrl';
      url = Item.linked_page.url
    }

    switch (cardType) {
      case 'square-card':
        return (url
          ? <Link to={url}><CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content}/></Link>
          : <CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content}/>);
      default:
        return (url
          ? <Link to={url}><CardType className='BsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType className='BsubSectioncardType' type ={type} title={Item.title}/>);
    }
  }

  renderCards(cards, type) {
    return _.map(cards, Item => {
      return (
        <div key={Item.id}>
          {this.CardType(type, Item)}
        </div>
      );
    });
  }

  render() {
    const {dataObject} = this.props;

    let cn = dataObject.background_color === 'gray'
      ? 'NBsubSectioncardType'
      : 'BsubSectioncardType'

    let header;
    if (dataObject.header !== '') {
      header = (
        <div key={dataObject.id}>
          <SubSectionHeader title={dataObject.header}/>
        </div>
      )
    }

    let body;
    if (dataObject.content !== '') {

      if (dataObject.cards.length > 0) {
        let l = (dataObject.cards.length);
        body = (
          <div>
            <Row className='nopadding'>
              <Col className='nopadding' xs={l > 2
                ? 12
                : 12} sm={l > 2
                ? 12
                : 8} md={l > 2
                ? 12
                : 8}>
                <div key={dataObject.id} className='cardTypeBody'>
                  {dataObject.content}
                </div>
              </Col>
              <Col className='nopadding' xs={l > 2
                ? 12
                : 12} sm={l > 2
                ? 12
                : 4} md={l > 2
                ? 12
                : 4}>
                <div className='cardTypeCards'>
                  <Row className='nopadding'>
                    {this.renderCards(dataObject.cards, dataObject.card_data.card_type)}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        )
      } else {
        body = (
          <div key={dataObject.id} className='cardTypeBody'>
            {dataObject.content}
          </div>
        )
      }

    } else {
      body = (
        <div>{this.renderCards(dataObject.cards, dataObject.card_data.card_type)}
        </div>
      )
    }

    let bg = dataObject.background_color === 'gray'
      ? 'greyBcg'
      : ''

    return (
      <div className={bg}>
        <div className='container'>
          <div>{header}</div>
          <div>{body}</div>
        </div>
      </div>
    );
  };
};
CardSec.propTypes = {
  dataObject: PropTypes.object,
  className: PropTypes.string
};

export default CardSec;
