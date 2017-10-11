import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ProfileCard from '../../shared/ProfileCard'
import ColorCard from '../../shared/ColorCard'
import ImageSection from './ImageSection'
import PlanCardSection from './PlanCardSection'
import PageText from '../../shared/PageText'
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
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
    let STdata = {};
    let ImageProps = {};
    let PageExplanation = {};
    let PlanProps = {};
    console.log('this.props.StrategicPlanData.data');
    console.log(this.props.StrategicPlanData);
    if(this.props.StrategicPlanData!=undefined){

      _.map(this.props.StrategicPlanData.data.sections.sections, item =>{
        switch (item.name){
          case 'top-section-2':{
              ImageProps.image = item.image.file;
              ImageProps.content = item.content;
          }
          case 'strategic-plan-body-content':{
              PageExplanation.content = item.content;
          }
          case 'strategic-plan-cards-section':{
              PlanProps.cards = item.cards;
          }
          case 'strategic-plan-bottom-files-section':{

          }
      }
    });
  }
    return (
      <div>
              <div>{STdata.header}</div>
              <ImageSection ImageProps = {ImageProps}/>
              <div className = 'SContainer'>
                <PageText PageExplanation = {PageExplanation} />
              </div>
              <div className = 'greyBcg'>
                <div className = 'SContainer'>
                  <PlanCardSection PlanProps = {PlanProps}/>
                </div>
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
