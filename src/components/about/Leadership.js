import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'


class Leadership extends Component {
  render() {
    return (
      <div className="Leadership">
        <SubSectionHeader title = {this.props.LeadershipProps.title}/>
        <RoundProfile ProfileUrl = {this.props.LeadershipProps.ProfileUrl}/>
        <div>
          {this.props.LeadershipProps.content}
        </div>
      </div>
    )
  }
}

export default Leadership;
