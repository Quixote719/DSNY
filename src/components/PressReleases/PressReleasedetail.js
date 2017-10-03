import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchPressReleaseDetails} from "../../actions";
import '../../content/styles/subSectionHeaderImage.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PressReleaseHeader from './pressReleaseHeader';
import PressReleaseBody from './pressReleaseBody';
import LazyImage from '../shared/LazyImage';

import moment from 'moment';

class PressReleaseDetail extends Component {

  componentDidMount() {
    const {slug} = this.props.match.params;
    this.props.fetchPressReleaseDetails(slug);
  }

  renderHeader(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseHeader title={Item.title.rendered} date={moment(Item.date).format('dddd, MMMM Do, YYYY')} status={Item.status_text} key={Item.id}/>);
    });
  }

  renderBody(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseBody body={Item.content.rendered} prid={Item.pr_number} contactinfo={Item.contact} key={Item.id}/>);
    });
  }

  renderimg(PR) {
    return _.map(PR, Item => {
      if (Item.featured_media > 0) {
        return (<LazyImage id={Item.featured_media} key={Item.id}/>);
      }
    });
  }

  render() {

    const {prd} = this.props;
    return (
      <div>
        <div className='container'>
          <div>{this.renderHeader(prd)}</div>
          <div>{this.renderimg(prd)}</div>
          <div>{this.renderBody(prd)}</div>
        </div>
      </div>

    );
  };
};

// PressReleaseDetail.propTypes = {
//   slug: PropTypes.string
// };

function mapStateToProps({
  PressRelease
}, ownProps) {
  return {prd: PressRelease.pressRelease.details};
}

export default connect(mapStateToProps, {fetchPressReleaseDetails})(PressReleaseDetail);;
