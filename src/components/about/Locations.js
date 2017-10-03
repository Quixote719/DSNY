import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionHeaderImage from '../shared/sub_section_header_image';


class Locations extends Component {

  render() {

    return (
      <div className="Locations">
        <SubSectionHeaderImage id='educational-materials'/>

      </div>
    )
  }
}

export default Locations;
