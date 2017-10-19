import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubSectionHeader from '../shared/sub_section_header';
import SubSectionButton from '../shared/sub_section_button';


class StrategicPlanSection extends Component {
  render() {
    return (
      <div className="StrategicPlan">
        <SubSectionHeader title = {this.props.StrategicPlanProps.title}/>
        <div dangerouslySetInnerHTML={{__html: this.props.StrategicPlanProps.content}}></div>
        <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/strategicplan"}>
          <SubSectionButton title='SEE STRATEGIC PLAN'/>
        </Link>
      </div>
    )
  }
}

export default StrategicPlanSection;
