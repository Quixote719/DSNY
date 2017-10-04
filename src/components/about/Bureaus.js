import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../actions/actions_about';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import ReportStatsardList from '../Resources/ReportsStats/Report_stats_card_list'
import {connect} from "react-redux";
import styles from '../../content/styles/dsnyCard.css';


class Bureaus extends Component {
  componentDidMount() {
    this.props.AboutBureausDepartment();
  }

  constructor() {
    super();
  }


  renderPosts(cards) {
    console.log('renderPosts');
    console.log(cards);
    let html = '';
    return cards.map(function(item,i){
      return (
            <TitleCard title={item.title} type='1' key={i}/>
      );
    })
  }

  ViewAllButton() {
    // if (l > 8) {
      return (<SubSectionButton title='VIEW ALL'/>);
    // } else {
    //   return null;
    // }
  }

  render() {

    const {BureausDpBigData} = this.props;
    if (_.isEmpty(BureausDpBigData)) {
      return (
        <div></div>
      );
    }

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

function mapStateToProps(state) {
  return {
    BureausDpBigData: state.AboutDataReducer.About.BureausDpBigData
  };
}


let actionList = {
  AboutBureausDepartment: actions.AboutBureausDepartment,
};

Bureaus = connect(mapStateToProps, actionList)(Bureaus);

export default Bureaus;
