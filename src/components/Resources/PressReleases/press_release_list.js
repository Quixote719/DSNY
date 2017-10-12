import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import PressReleaseListItem from './press_release_list_item';
class PressRelease extends Component {

  constructor(props, context) {
    super(props, context);
    this.firstN = this.firstN.bind(this);

  }

  renderPosts(pr) {
    console.log('yeshu');
    console.log(pr);
    return _.map(this.firstN(pr, 4), prItem => {
      return (<PressReleaseListItem prid={prItem.pr_number} slug={prItem.name} title={prItem.title} date={prItem.date} key={prItem.title}/>);
    });
  }

  firstN(obj, n) {
    return _.chain(obj).keys().sort().take(n).reduce(function(memo, current) {
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

  render() {

    const {pr, n} = this.props;

    if (_.isEmpty(pr)) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <SubSectionHeader title="Press Release" onClick={this._reroute}/>
        <div>{this.renderPosts(pr)}</div>

        {this.ViewAllButton(n)}
      </div>
    );
  }
}

PressRelease.propTypes = {
  pr: PropTypes.array.isRequired,
  n: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default PressRelease;
