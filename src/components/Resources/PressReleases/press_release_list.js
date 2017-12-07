import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import PressReleaseListItem from './press_release_list_item';
import {Row, Col} from 'react-bootstrap';
class PressRelease extends Component {

  constructor(props, context) {
    super(props, context);
    this.firstN = this.firstN.bind(this);

  }

  renderPosts(pr,max_cards) {

    const shortenedPressReleaseList = this.firstN(pr,4);
    const length = Object.keys(this.firstN(pr,4)).length;

    return _.map(this.firstN(pr, 4), (prItem,index) => {
      return (<PressReleaseListItem prid={prItem.pr_number} slug={prItem.linked_page.url} title={prItem.title} date={prItem.date}
      key={prItem.title} arrayIndex={index} arraylength={length} maxCards={max_cards}/>);
    });
  }

  firstN(obj, n) {
    return _.chain(obj).keys().sort().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  ViewAllButton(l,max_cards) {
    if(max_cards == 0){
       return (<Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/press-releases"}><SubSectionButton title='VIEW ALL'/></Link>);
    }

    if (l > max_cards) {
      return (<Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/resources/press-releases"}><SubSectionButton title='VIEW ALL' /></Link>);
    } else {
      return null;
    }

  }

  render() {
    const {pr, n, maxCards} = this.props;

    if (_.isEmpty(pr)) {
      return (<div></div>);
    }

    return (<div>
      <SubSectionHeader title="Press Release" />
      <div>{this.renderPosts(pr,maxCards)}</div>
      {this.ViewAllButton(n,maxCards)}
    </div>);
  }
}

PressRelease.propTypes = {
  pr: PropTypes.array.isRequired,
  n: PropTypes.any.isRequired,
  maxcards:PropTypes.any,
  onClick: PropTypes.func
};

export default PressRelease;
