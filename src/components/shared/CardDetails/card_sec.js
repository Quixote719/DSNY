import _ from "lodash";
import React, {Component} from "react";
import Link from './link'
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import '../../../content/styles/lawsListItem.css';
import SubSectionHeader from '../sub_section_header';
import CardType from './card_type'
import CardFullWidth from './card_full_width'
import CardTitleBody from '../Card_title_body'
import CardReferenceDetails from '../../PressReleases/reference_details_card'

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
    /**
    article-search-result-card | Article Search Result
    color-bar-card | Color Bar Card
    contact-card | Contact Card
    header-title-blurb-card | Header/Title/Blurb Card
    icon-category | Icon Category Card
    multi-file-card | Multi-File Card
    news-card | News Card
    reference-details-card | Reference/Details Card
    square-card | Square Card
    square-card-with-image | Square Card (with Image)
    staff-card | Staff Card
    standard-card-no-border | Standard Card (no border)
    standard-card-with-border | Standard Card (with border)
     */

    console.log(cardType);
    switch (cardType) {
      case 'square-card':
        return (url
          ? <Link to={url}><CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content}/></Link>
          : <CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content}/>);
      case 'standard-card-no-border':
        return (url
          ? <Link to={url}><CardType className='NBsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType className='BsubSectioncardType' type ={type} title={Item.title}/>);
      case 'standard-card-with-border':
        return (url
          ? <Link to={url}><CardType className='BsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType className='BsubSectioncardType' type ={type} title={Item.title}/>);
      case 'full-width-card':
        return (<CardFullWidth link={url} dataObject={Item}/>);
      case 'reference-details-card':
        return (<CardReferenceDetails title={Item.title} body={Item.content} key={_.random(0, 200, true)}/>);
      default:
        return (url
          ? <Link to={url}><CardType className='NBsubSectioncardType' type ={type} title={Item.title}/></Link>
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
        let cType = dataObject.card_data.card_type !== "reference-details-card"

        let layoutTrigger = cType && l > 2
        console.log(layoutTrigger);
        body = (
          <div>
            <Row className='nopadding'>
              <Col className='nopadding' xs={layoutTrigger
                ? 12
                : 12} sm={layoutTrigger
                ? 12
                : 6} md={layoutTrigger
                ? 12
                : cType
                  ? 8
                  : 9}>
                <div key={dataObject.id} className='cardTypeBody' dangerouslySetInnerHTML={{
                  __html: dataObject.content
                }}/>
              </Col>
              <Col className='nopadding' xs={layoutTrigger
                ? 12
                : 12} sm={layoutTrigger
                ? 12
                : 6} md={layoutTrigger
                ? 12
                : cType
                  ? 4
                  : 3}>
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
        body = (<div key={dataObject.id} className='cardTypeBody' dangerouslySetInnerHTML={{
          __html: dataObject.content
        }}/>)
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
