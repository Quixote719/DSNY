import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchRcSubList, fetchScSubList} from "../../../actions";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import CardTitleBody from '../../shared/Card_title_body';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

class ReportStatsardList extends Component {
  componentDidMount() {
    this.props.fetchRcSubList();
    this.props.fetchScSubList();
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  firstN(obj, n) {

    return _.chain(obj).keys().sort().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  renderPosts(cards) {
    return _.map(this.firstN(cards, 4), Item => {
      return (<CardTitleBody className='NBsubSectioncardTB' title={Item.title.rendered} body={Item.content.rendered} key={Item.id}/>);
    });
  }

  ViewAllButton(l) {
    if (l > 4) {
      return (<SubSectionButton title='VIEW ALL'/>);
    } else {
      return null;
    }

  }

  render() {

    const {rc, sc} = this.props;

    if (_.isEmpty(rc)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <div>
          <SubSectionHeader title='Reports'/>
          <Row>
            {this.renderPosts(rc)}
          </Row>
          {this.ViewAllButton(_.size(rc))}
        </div>
        <div>
          <SubSectionHeader title='Recycling and Garbage Statistics'/>
          <Row>
            {this.renderPosts(sc)}
          </Row>
          {this.ViewAllButton(_.size(sc))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {rc: state.resources.ReportCardSubList, sc: state.resources.StatsCardSubList};
}

export default connect(mapStateToProps, {fetchRcSubList, fetchScSubList})(ReportStatsardList);
