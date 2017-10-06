import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import styles from '../../content/styles/dsnyCard.css';

class BureausSection extends Component {

  renderPosts(cards = []) {
    console.log('rendercards');
    console.log(cards);
      return cards.map(function(item,i){
        return (
              <TitleCard title={item.title} type='2' key={i}/>
        );
      })
  }

  ViewAllButton() {
      return (<SubSectionButton title='VIEW ALL'/>);
  }

  render() {
    return (
      <div>
        <div>
          <SubSectionHeader title='Bureaus'/>
          <div className="BureausCards">
            {this.renderPosts(this.props.cards)}
          </div>
          {this.ViewAllButton()}
        </div>
      </div>
    );
  }
}


export default BureausSection;
