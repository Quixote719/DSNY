import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'


class Operations extends Component {

  render() {

    return (
      <div className="Operations">
        <SubSectionHeader title="Operations"/>
      </div>
    )
  }
}

export default Operations;
