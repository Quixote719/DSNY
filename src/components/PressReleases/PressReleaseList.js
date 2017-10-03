import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchPressReleaseList} from "../../actions";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import moment from 'moment';
import PressReleaseListItem from '../Resources/PressReleases/press_release_list_item';
import SubSectionDropdown from '../shared/Sub_section_dropdown'

// Set initial state
let PressReleaseListstate = {
  year: 2017
};

class PressReleaseList extends Component {

  componentDidMount() {
    const {id} = this.props
    const {year} = this.state
    this.props.fetchPressReleaseList(year);
  }
  constructor(props) {
    super(props);
    // Retrieve the last state
    this.state = PressReleaseListstate;

    this.fetchPressRelease = this.fetchPressRelease.bind(this);
  }

  componentWillUnmount() {
    // Remember state for the next mount
    PressReleaseListstate = this.state;
  }

  renderPosts(prl) {
    return _.map(prl, prItem => {
      return (<PressReleaseListItem prid={prItem.pr_number} slug={prItem.slug} title={prItem.title.rendered} date={prItem.date} key={prItem.id}/>);
    });
  }

  fetchPressRelease(year) {
    this.setState({year: year});
    this.props.fetchPressReleaseList(year);
  }

  render() {

    const {prl} = this.props;
    return (
      <div>
        <div className='container'>
          <SubSectionDropdown selectedOption={this.state.year} ondropDownChange={this.fetchPressRelease}/>
          <div>{this.renderPosts(prl)}</div>
        </div>
      </div>

    );
  };
};

function mapStateToProps({
  PressRelease
}, ownProps) {
  return {prl: PressRelease.pressRelease.list};
}

export default connect(mapStateToProps, {fetchPressReleaseList})(PressReleaseList);
