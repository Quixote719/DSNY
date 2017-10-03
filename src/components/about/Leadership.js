import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/actions_about';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'


class Leadership extends Component {
  render() {
    return (
      <div className="Leadership">
        <SubSectionHeader title = {this.props.LeadershipProps.title}/>
        <div className="LeadershipLeft">
          <RoundProfile ProfileUrl = {this.props.LeadershipProps.ProfileUrl}/>
        </div>
        <div className="LeadershipRight" dangerouslySetInnerHTML={{__html: this.props.LeadershipProps.content}}>
        </div>
      </div>
    )
  }
}

export default Leadership;
