import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import LargeContentCard from '../shared/LargeContentCard'
import TitleContentCard from '../shared/TitleContentCard'
import '../../content/styles/ContentCard.css';


class Operations extends Component {

  render() {
    return (
      <div className="Operations">
        <SubSectionHeader title="Operations"/>
        <div>
          <div className='SmallLeftSec'>
            <LargeContentCard content = 'CONTENT' type = '1'/>
          </div>
          <div className='MiddleSec'>
            <TitleContentCard type = '1'/>
          </div>
          <div className='SmallRightSec'>
            <TitleContentCard type = '1'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Operations;
