import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchEventSubList} from "../../../actions/actions_homePageCarousel";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import NewsListItem from './news_list_item';

class News extends Component {
  componentDidMount() {
    this.props.fetchEventSubList();
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  renderPosts(pr) {
    return _.map(this.firstN(pr, 4), eventItem => {
      return (<EventListItem eventid={eventItem.EventID} description={eventItem.Description} title={eventItem.EventName} boro={eventItem.Borough} date={eventItem.EventDate} key={eventItem.EventID}/>);
    });
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  ViewAllButton(l) {
    if (l > 4) {
      return (<SubSectionButton title='MORE EVENTS' onClick={this._reroute}/>);
    } else {
      return null;
    }

  }
  _reroute() {
    console.log('re routing this module to a sub module');
  }

  render() {

    const {pr} = this.props;

    if (_.isEmpty(pr)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <SubSectionHeader title="DSNY Events"/>
        <div>{this.renderPosts(pr)}</div>

        {this.ViewAllButton(_.size(pr))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pr: state.carouselDataReducer.EventsSubList};
}

export default connect(mapStateToProps, {fetchEventSubList})(News);
