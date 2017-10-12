import React, { Component } from 'react'
import SubSectionHeader from '../shared/sub_section_header'
import ContentCard from '../shared/ContentCard'
import TitleCard from '../shared/TitleCard'
import _ from "lodash";
import '../../content/styles/ContentCard.css';

class FoundationSection extends Component {

  ListCards(cards){
    return _.map(cards, item => {
      return (
        <div className='CardTitleBox' key={item.id}>
          <TitleCard type='2' title={item.title} />
          <div className='FoundationSp'></div>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="Foundation">
        <SubSectionHeader title = {this.props.FoundationProps.title}/>
        <div>
            <div className='leftSec'>
              <ContentCard type='3' content={this.props.FoundationProps.content}/>
            </div>
            <div className='rightSec'>
                {this.ListCards(this.props.FoundationProps.cards)}
            </div>
        </div>
      </div>
    )
  }
}

export default FoundationSection;
