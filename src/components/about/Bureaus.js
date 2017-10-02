import _ from "lodash";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RoundProfile from '../shared/RoundProfile';
import * as actions from '../../actions/Actions_About';
import SubSectionHeader from '../shared/sub_section_header'
import SubSectionButton from '../shared/sub_section_button';
import TitleCard from '../shared/TitleCard';
import ReportStatsardList from '../Resources/ReportsStats/Report_stats_card_list'
import {connect} from "react-redux";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';


class Bureaus extends Component {
  componentDidMount() {
    this.props.AboutBureausDepartment();
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    console.log('renderPosts');
    console.log(cards);
    let html = '';
    return cards.data.map(function(item){
      return <TitleCard/>;
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
    console.log('BureausDpBigData!!!');
    console.log(BureausDpBigData);
    if (_.isEmpty(BureausDpBigData)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <div>
          <SubSectionHeader title='Reports'/>
          <div>
            {this.renderPosts(BureausDpBigData)}
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
