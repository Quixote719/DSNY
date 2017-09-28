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
        <SubSectionHeader title = {this.props.title}/>
        <RoundProfile ProfileUrl = {this.props.ProfileUrl}/>
      </div>
    )
  }
}

export default Leadership;
