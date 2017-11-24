import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../../shared/sub_section_header';
import '../../../content/styles/ComplaintsPage.css';
import CardTitle from '../../shared/Card_title';
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CardType from '../../shared/CardDetails/card_type';
import CardBox from '../../shared/card_box';

class EqualOpportunitySection extends Component {
    render() {
      return (
        <div className="EqualOpportunitySection">
          <SubSectionHeader title = {this.props.EqualOpportunityProps.title}/>
          <CardBox info={this.props.EqualOpportunityProps}/>
        </div>
      )
    }
  }
  
  export default EqualOpportunitySection;