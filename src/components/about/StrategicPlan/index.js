import React, { Component } from 'react'
import ImageSection from '../../shared/ImageSection'
import PlanCardSection from './PlanCardSection'
import CardBox from '../../shared/card_box'
import PageText from '../../shared/PageText'
import CardSec from '../../shared/CardDetails/card_sec'
import Header from '../../shared/Breadcrumb/breadcrumb_container'
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class StrategicPlan extends Component {

  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.StrategicPlan();
  }
  render() {
    let banner;
    let STdata = {};
    let ImageProps = {};
    let PageExplanation = {};
    let PlanProps = {};
    let sections = null;
    console.log('this.props.StrategicPlanData.data');
    console.log(this.props.StrategicPlanData);
    if(this.props.StrategicPlanData !== undefined){
      _.map(this.props.StrategicPlanData.data.sections.sections, item =>{
        switch (item.name){
          case 'top-section-2':{
              ImageProps.image = item.featured_image.base_path + item.featured_image.file;
              ImageProps.content = item.content;
              break;
          }
          case 'strategic-plan-body-content':{
              PageExplanation.content = item.content;
              break;
          }
          case 'strategic-plan-cards-section':{
              PlanProps.button = true;
              PlanProps.ButtonTitle = 'SEE FULL PLAN';
              PlanProps.cards = item.cards;
              PlanProps.CardType = item.card_data.card_type;
              break;
          }
          case 'strategic-plan-bottom-files-section':{
              sections = <CardSec dataObject={item}/>
              break;
          }
          default:{
            break;
          }
        }
      });
    }
    return (
      <div className="StrategicPlanPage">
              <div>{STdata.header}</div>
              <ImageSection ImageProps = {ImageProps}/>
              <div className = 'SContainer'>
                <Row>
                  <Col xs={12} sm={12} md={12}>
                    <PageText PageExplanation = {PageExplanation} />
                  </Col>
                </Row>
              </div>
              <div className = 'greyBcg' >
                <div className = 'SContainer boxPadding'>
                  <CardBox info={PlanProps}/>
                </div>
                {sections}
              </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    StrategicPlanData: state.AboutDataReducer.StrategicPlanData,
  }
}

let actionList = {
  StrategicPlan: actions.StrategicPlan,
};

StrategicPlan = connect(mapStateToProps, actionList)(StrategicPlan);

export default StrategicPlan;
