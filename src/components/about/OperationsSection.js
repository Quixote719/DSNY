import React, { Component } from 'react';
import SubSectionHeader from '../shared/sub_section_header'
import ContentCard from '../shared/ContentCard'
import TitleContentCard from '../shared/TitleContentCard'
import _ from "lodash";
import '../../content/styles/card.css';


class OperationsSection extends Component {

  ListCards(cards){
    return _.map(cards, item => {
      return (
          <TitleContentCard key={item.id} type='1' link={item.linked_url} title={item.title} content={item.content}/>
      )
    })
  }

  render() {
    return (
      <div className = "Operations">
        <SubSectionHeader title = {this.props.OperationProps.title}/>
        <div className = "OperationCards">
          <div className = "SmallLeftSec">
            <ContentCard content = {this.props.OperationProps.content} type = '2'/>
          </div>
            {this.ListCards(this.props.OperationProps.cards)}
        </div>
      </div>
    )
  }
}

export default OperationsSection;
