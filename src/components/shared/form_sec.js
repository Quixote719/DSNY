import _ from "lodash";
import React, {Component} from "react";
import Link from './CardDetails/link'
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/lawsListItem.css';
import SubSectionHeader from './sub_section_header';
import SubSectionHeaderGreen from './sub_section_header_green';
import CardType from './CardDetails/card_type'
import FormRow from './form_detail_row'
import TableDictionary from './CardDetails/card_table_dictionary'
import CardFullWidth from './CardDetails/card_full_width'
import CardTitleBody from './Card_title_body'
import CardMultifile from './CardDetails/card_multifile'
import SubSectionButton from './sub_section_button';
import CardReferenceDetails from '../PressReleases/reference_details_card';
import CardTitleImage from './Card_title_image';
import $ from 'jquery';

class CardSec extends Component {

  constructor(props) {
    super(props);
  }

  CardType(cardType, Item, style) {

    let url;
    let type;
    let ImageUrl;

    /* A condition check to ensure featured Image exists, to fetch the url of the Image */
    if(Item.featured_image){
      ImageUrl  = this.getImageUrl(Item);
    }

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
      url = process.env.REACT_APP_SITE_RELATIVE_URL + Item.linked_page.url
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
    staff-card | Staff Card | Square Card (No Border)
    standard-card-no-border | Standard Card (no border)
    standard-card-with-border | Standard Card (with border)
     */
    switch (cardType) {
      case 'table-dictionary-card':
        return (<TableDictionary title={Item.title} body={Item.content} url = {Item.linked_page.url}  header ={Item.header}/> );
      case 'square-card-no-border':
            return (url
          ? <Link to={url}><CardTitleBody className='NBsubSectioncardTB' title={Item.title} body={Item.content}/></Link>
          : <CardTitleBody className='NBsubSectioncardTB' title={Item.title} body={Item.content} />);
      case 'square-card-with-image':
            return (url
          ? <Link to={url}><CardTitleImage className='NBsubSectioncardTB' title={Item.title} body={Item.content} ImgSrc={ImageUrl}/></Link>
          : <CardTitleImage className='NBsubSectioncardTB' title={Item.title} body={Item.content} ImgSrc={ImageUrl}/>);
      case 'square-card':
        return (url
          ? <Link to={url}><CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content}/></Link>
          : <CardTitleBody className='subSectioncardTB' title={Item.title} body={Item.content} />);
      case 'standard-card-no-border':
        return (url
          ? <Link to={url}><CardType style={style} className='NBsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType style={style} className='BsubSectioncardType' type ={type} title={Item.title}/>);
      case 'standard-card-with-border':
        return (url
          ? <Link to={url}><CardType style={style} className='BsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType style={style} className='BsubSectioncardType' type ={type} title={Item.title}/>);
      case 'full-width-card':
        return (<CardFullWidth link={url} dataObject={Item}/>);
      case 'multi-file-card':
        return (<CardMultifile dataObject={Item}/>);
      case 'reference-details-card':
        return (<CardReferenceDetails title={Item.title} body={Item.content} key={_.random(0, 200, true)}/>);
      case 'form-link-card':
        return (url
          ? <Link to={url}><FormRow style={style} className='NBsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <FormRow style={style} className='BsubSectioncardType' type ={type} title={Item.title}/>);
      default:
        return (url
          ? <Link to={url}><CardType style={style} className='NBsubSectioncardType' type ={type} title={Item.title}/></Link>
          : <CardType style={style} className='BsubSectioncardType' type ={type} title={Item.title}/>);
    }
  }

  renderCards(cards, type, style) {
    return _.map(cards, Item => {
      return (
        <div key={Item.id}>
          {this.CardType(type, Item, style)}
        </div>
      );
    });
  }

  /* Get Url of the Image File, using base path && File name */
  getImageUrl(Item){
      let basepath = Item.featured_image.base_path;
      let filename = Item.featured_image.file;
      return `${basepath}${filename}`;
  }

  /*The Header is made green to be displayed as title */
  getGreenHeader(dataObject,headerContent){
      return(
              <div key={dataObject.id}>
                <SubSectionHeaderGreen title={headerContent}/>
              </div>
            );
    }

  /* Normal Black Header is returned, provided there are no tags in the dataObject header */
  getHeader(dataObject){
      return(
                <div key={dataObject.id}>
                  <SubSectionHeader title={dataObject.header}/>
                </div>
               )
  }

  /* Check if the Header of the Page is Valid HTML, if it is then only css is colour is obtained from the Header */
  checkifValidHTML(dataObject){
    return /<[a-z][\s\S]*>/i.test(dataObject.header);
  }

  render() {
    const {dataObject} = this.props;
    const {success} = this.props;

    if(success !== undefined) {
      if(success != null) {
        console.log(success.SRNo);
      }
    }


    let l = (dataObject.cards.length);

    let style = l > 2
      ? 'FullWidth'
      : dataObject.content !== ''
        ? 'RightAlligned'
        : 'FullWidth'

    let cn = dataObject.background_color === 'gray'
      ? 'NBsubSectioncardType'
      : 'BsubSectioncardType'


    let header;
    let headerColor;
    let headerContent;

    if (dataObject.header !== '') {
         if(dataObject.header_text_color == 'green' || dataObject.header_text_color == 'rgb(0, 128, 0)'){
            headerContent = dataObject.header.replace(/<[^>]+>/g, '');
            header = this.getGreenHeader(dataObject,headerContent);
         }else{
            header = this.getHeader(dataObject);
         }
    }

    let body;


    if (dataObject.content !== '') {

      if (dataObject.cards.length > 0) {

        let cType = dataObject.card_data.card_type !== "reference-details-card"

        /* This is to ensure multi-file cards appear as a single row below the content present in header Section
            If the card is a 'form-link-card' then it is made to appear in a seperate line */

        let cardThreshold = (dataObject.card_data.card_type == 'multi-file-card' || dataObject.card_data.card_type == 'form-link-card') ? 0 : 2;

        let layoutTrigger = cType && l > cardThreshold;


        body = (
          <div>
            <Row className='nopadding'>
              <Col className='nopadding' xs={layoutTrigger
                ? 12
                : 12} sm={layoutTrigger
                ? 12
                : cType
                  ? 6
                  : 9} md={layoutTrigger
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
                : cType
                  ? 6
                  : 3} md={layoutTrigger
                ? 12
                : cType
                  ? 4
                  : 3}>
                <div className='cardTypeCards'>
                  <Row className='nopadding'>
                    {this.renderCards(dataObject.cards, dataObject.card_data.card_type, style)}
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        )
      } else {
        body = (<div key={dataObject.id} className='cardTypeBodyNoHeader' dangerouslySetInnerHTML={{
          __html: dataObject.content
        }}/>)
      }

    } else {
      body = (
        <Row>{this.renderCards(dataObject.cards, dataObject.card_data.card_type, style)}
        </Row>
      )
    }

    return (
        <div className='SContainer'>
          <div>{header}</div>
          <div id="contactPageBody">{body}</div>
        </div>
    );
  };
};
CardSec.propTypes = {
  dataObject: PropTypes.object,
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {success:state.forms.success, error:state.error.type};
}

export default CardSec;
