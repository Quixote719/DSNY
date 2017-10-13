import _ from "lodash";
import React, {Component} from "react";
import LazyLoad from 'react-lazyload';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchEventSubList} from "../../../actions/actions_home";
import {Grid, Row, Col, Pagination, Clearfix} from 'react-bootstrap';
import moment from 'moment';
import EventListItem from './event_list_item';
import SubSectionDropdown from '../../shared/Sub_section_dropdown'

// Set initial state
let PressReleaseListstate = {
  year: 'ALL',
  activePage: 1
};

class DSNYEvents extends Component {

  componentDidMount() {
    // window.scrollTo(0, 0); 
    const {id} = this.props
    const {year} = this.state
    // this.props.fetchPressReleaseList(year);
    this.props.fetchEventSubList();
  }
  constructor(props) {
    super(props);
    // Retrieve the last state
    this.state = PressReleaseListstate;

    this.fetchPressRelease = this.fetchPressRelease.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentWillUnmount() {
    // Remember state for the next mount
    PressReleaseListstate = this.state;
  }

  renderPosts(eventData) {
    return _.map(eventData, eventItem => {
      return (
        <LazyLoad height={300} >
          <EventListItem eventid={eventItem.EventID} description={eventItem.Description} title={eventItem.EventName} boro={eventItem.BoroughShortName} date={eventItem.EventDate} key={eventItem.EventID}/>
        </LazyLoad>
      );
    });
  }

  fetchPressRelease(year) {
    this.setState({year: year});
    // this.props.fetchEventSubList(year);
  }

  render() {

    const {eventData} = this.props;
    return (
      <div>
        <div className='container'>
          <SubSectionDropdown selectedOption={this.state.year} ondropDownChange={this.fetchPressRelease}/>
          <div>{this.renderPosts(eventData)}</div>
        </div>
      </div>

    );
  };
};

// function mapStateToProps({
//   PressRelease
// }, ownProps) {
//   return {prl: PressRelease.pressRelease.list};
// }

// export default connect(mapStateToProps, {fetchPressReleaseList})(DSNYEvents);

function mapStateToProps(state) {
  return {eventData: state.carouselDataReducer.EventsSubList};
}

export default connect(mapStateToProps, {fetchEventSubList})(DSNYEvents);
