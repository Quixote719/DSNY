import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import CardTitleBody from '../shared/Card_title_body';
import ReportStatsardList from '../Resources/ReportsStats/Report_stats_card_list'


class Bureaus extends Component {
  render() {
    return (
      <div className="Bureaus">
        <SubSectionHeader title={this.props.BureausTitle}/>
      </div>
    )
  }
}

export default Bureaus;
