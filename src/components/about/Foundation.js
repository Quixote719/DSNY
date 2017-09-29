import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'


class Foundation extends Component {

  render() {

    return (
      <div className="Foundation">
        <SubSectionHeader title="Foundation"/>
      </div>
    )
  }
}

export default Foundation;
