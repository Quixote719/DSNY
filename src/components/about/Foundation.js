import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import RoundProfile from '../shared/RoundProfile'
import CardTitle from '../shared/Card_title'
import SubSectionHeader from '../shared/sub_section_header'
import LargeContentCard from '../shared/LargeContentCard'
import TitleCard from '../shared/TitleCard'
import '../../content/styles/ContentCard.css';

class Foundation extends Component {

  ListCards(cards){
    return cards.map((item, i)=>{
      return (
            <TitleCard type='2' title={item.title}/>
      )
    })
  }
  render() {
    return (
      <div className="Foundation">
        <SubSectionHeader title = {this.props.FoundationProps.title}/>
        <div>
            <div className='leftSec'>
              <LargeContentCard type='2' content={this.props.FoundationProps.content}/>
            </div>
            <div className='rightSec'>
                {this.ListCards(this.props.FoundationCards)}
            </div>
        </div>
      </div>
    )
  }
}

export default Foundation;
