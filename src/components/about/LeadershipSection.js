import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'


class LeadershipSection extends Component {
  render() {
    return (
      <div className="Leadership">
        <SubSectionHeader title = {this.props.LeadershipProps.title}/>

          <RoundProfile ProfileUrl = {this.props.LeadershipProps.ProfileUrl}/>

        <div className="LeadershipRight" dangerouslySetInnerHTML={{__html: this.props.LeadershipProps.content}}>
        </div>
      </div>
    )
  }
}

export default LeadershipSection;
