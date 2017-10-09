import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import ContentCard from '../shared/ContentCard'
import TitleContentCard from '../shared/TitleContentCard'
import '../../content/styles/card.css';


class OperationsSection extends Component {

  ListCards(cards){
    return cards.map((item, i)=>{
      return (
          <TitleContentCard type='1' title={item.title} content={item.content}/>
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
            {this.ListCards(this.props.OperationCards)}
        </div>
      </div>
    )
  }
}

export default OperationsSection;
