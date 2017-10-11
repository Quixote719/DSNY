import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubSectionButton from '../../shared/sub_section_button';
import ColorCard from '../../shared/ColorCard';
import styles from '../../../content/styles/dsnyCard.css';

class PlanCardSection extends Component {

  renderPosts(cards = []) {
    return _.map(cards, item => {
        return (
              <ColorCard title={item.title} content={item.content} key={item.id} />
        );
      })
  }

  ViewAllButton() {
      return (<SubSectionButton title='SEE FULL PLAN'/>);
  }

  render() {
    return (
      <div>
        <div>
          <div className="BureausCards">
            {this.renderPosts(this.props.PlanProps.cards)}
          </div>
          {this.ViewAllButton()}
        </div>
      </div>
    );
  }
}


export default PlanCardSection;
