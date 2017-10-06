import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import LargeContentCard from '../shared/LargeContentCard'
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
            <LargeContentCard content = {this.props.OperationProps.content} type = '1'/>
          </div>
            {this.ListCards(this.props.OperationCards)}
        </div>
      </div>
    )
  }
}

export default OperationsSection;