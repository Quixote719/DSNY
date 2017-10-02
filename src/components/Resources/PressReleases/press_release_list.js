import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPrSubList} from "../../../actions";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import PressReleaseListItem from './press_release_list_item';
class PressRelease extends Component {
  componentDidMount() {
    this.props.fetchPrSubList();
  }

  constructor(props, context) {
    super(props, context);
    this.firstN = this.firstN.bind(this);
    this._reroute = this._reroute.bind(this);
  }

  renderPosts(pr) {
    return _.map(this.firstN(pr, 4), prItem => {
      return (<PressReleaseListItem prid={prItem.pr_number} slug={prItem.slug} title={prItem.title.rendered} date={prItem.date} key={prItem.id}/>);
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
      return (
        <Link to="/PressReleaseList"><SubSectionButton title='VIEW ALL' onClick={this._reroute}/></Link>
      );
    } else {
      return null;
    }

  }
  _reroute() {
    console.log('re routing this module to a sub module');
    //this.props.history.push("/" + window.staticUrl + '/PressReleaseList');
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
        <SubSectionHeader title="Press Release" onClick={this._reroute}/>
        <div>{this.renderPosts(pr)}</div>

        {this.ViewAllButton(_.size(pr))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pr: state.resources.PresssReleasesSubList};
}

export default connect(mapStateToProps, {fetchPrSubList})(PressRelease);
