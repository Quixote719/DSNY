import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title';
import SubSectionHeader from '../shared/sub_section_header';
import SubSectionButton from '../shared/sub_section_button';


class StrategicPlan extends Component {

  render() {

    return (
      <div className="StrategicPlan">
        <SubSectionHeader title = {this.props.StrategicPlanProps.title}/>
        <div>
            {this.props.StrategicPlanProps.content}
        </div>
        <SubSectionButton title='SEE STRATEGIC PLAN'/>
      </div>
    )
  }
}

export default StrategicPlan;
