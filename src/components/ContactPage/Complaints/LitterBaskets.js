import _ from "lodash";
import React, { Component } from 'react';
import SubSectionHeader from '../../shared/sub_section_header';
import '../../../content/styles/Section.css';
import CardTitle from '../../shared/Card_title';
import {Row} from 'react-bootstrap';
import {Link} from "react-router-dom";
import CardType from '../../shared/CardDetails/card_type';
import CardBox from '../../shared/card_box';

class LitterBasketsSection extends Component {

  render() {
    return (
        <div className="Section">
          <SubSectionHeader title={this.props.LitterBasketsProps.title}/>
          <CardBox info={this.props.LitterBasketsProps}/>
        </div>
    );
  }
}


export default LitterBasketsSection;
