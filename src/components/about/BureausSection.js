import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header';
import CardBox from '../shared/card_box';
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import { Link } from 'react-router-dom';
import '../../content/styles/dsnyCard.css';

class BureausSection extends Component {


  ViewAllButton() {
      return (<SubSectionButton title='SEE ALL BUREAUS'/>);
  }

  render() {
    return (
        <div>
          <SubSectionHeader title={this.props.BureausProps.title}/>
          <CardBox info={this.props.BureausProps}/>
          <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/about/bureaus"}>
            {this.ViewAllButton()}
          </Link>
        </div>
    );
  }
}


export default BureausSection;
