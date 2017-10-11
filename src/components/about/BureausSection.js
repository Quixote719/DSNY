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
    return _.map(cards, item => {
        return (
              <TitleCard title={item.title} type='2' key={item.id} />
        );
      })
  }

  ViewAllButton() {
      return (<SubSectionButton title='SEE ALL BUREAUS'/>);
  }

  render() {
    return (
      <div>
        <div>
          <SubSectionHeader title={this.props.BureausProps.title}/>
          <div className="BureausCards">
            {this.renderPosts(this.props.BureausProps.cards)}
          </div>
          {this.ViewAllButton()}
        </div>
      </div>
    );
  }
}


export default BureausSection;
