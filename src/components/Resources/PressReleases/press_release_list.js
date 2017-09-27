import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchPrSubList} from "../../../actions";
import SubSectionHeader from '../../shared/sub_section_header';
import PressReleaseListItem from './press_release_list_item';
import SubSectionButton from '../../shared/sub_section_button';

class PressRelease extends Component {
  componentDidMount() {
    this.props.fetchPrSubList();
  }

  constructor() {
    super();
    this.firstN = this.firstN.bind(this);
  }

  renderPosts(pr) {
    return _.map(this.firstN(pr, 4), prItem => {
      return (<PressReleaseListItem prid={prItem.pr_number} title={prItem.title.rendered} date={prItem.date} key={prItem.id}/>);
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
      return (<SubSectionButton title='VIEW ALL' onClick={this._reroute}/>);
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
        <SubSectionHeader title="Press Release"/>
        <ul className="list-group">
          {this.renderPosts(pr)}
        </ul>
        {this.ViewAllButton(_.size(pr))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {pr: state.resources.PresssReleasesSubList};
}

export default connect(mapStateToProps, {fetchPrSubList})(PressRelease);
