import React, { Component } from 'react'
import ImageSection from '../../shared/ImageSection'
import ColorCard from '../../shared/ColorCard'
import TitleBanner from '../../shared/TitleBanner'
import CardBox from '../../shared/card_box'
import Header from '../../shared/Breadcrumb/breadcrumb_container'
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Bureaus extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.Bureaus();
  }
  render() {
        let ImageProps = {};
        let BureausCards = {};
        let banner;
        if(this.props.BureausData !== undefined){
          let data = this.props.BureausData.data;
          banner = (
                      <div key={data.id}>
                        <Header title={data.title} breadCrumbList={data.breadcrumb} body={data.header_content}/>
                      </div>
                   )
          _.map(this.props.BureausData.data.sections.sections, item =>{
                switch (item.name){
                  case 'top-section':{
                    ImageProps.image = item.image.file;
                    ImageProps.content = item.content;
                    break;
                  }
                  case 'bureaus-cards-section':{
                    BureausCards.cards = item.cards;
                    BureausCards.CardType = item.card_data.card_type;
                    break;
                  }
                  default:{
                    break;
                  }
                }
          })
        }
    return (
      <div className='BureausPage'>
        {banner}
        <ImageSection ImageProps={ImageProps}/>
        <div className='greyBcg'>
          <div className='SContainer boxPadding'>
            <CardBox info={BureausCards}/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    BureausData: state.AboutDataReducer.BureausData,
  }
}

let actionList = {
  Bureaus: actions.Bureaus,
};

Bureaus = connect(mapStateToProps, actionList)(Bureaus);


export default Bureaus;
