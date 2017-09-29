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
    const {id} = this.props
    this.props.fetchPressReleaseDetails(id);
  }

  renderHeader(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseHeader title={Item.title.rendered} date={moment(Item.date).format('dddd, MMMM Do, YYYY')} status={Item.status_text}/>);
    });
  }

  renderBody(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseBody body={Item.content.rendered} prid={Item.pr_number} contactinfo={Item.contact}/>);
    });
  }

  renderimg(PR) {
    return _.map(PR, Item => {

      return (<LazyImage id='432'/>);

    });
  }

  render() {

    const {prd} = this.props;
    console.log('yeshu');
    console.log(prd);
    return (

      <div >
        <div>{this.renderHeader(prd)}</div>
        <div>{this.renderimg(prd)}</div>
        <div>{this.renderBody(prd)}</div>
      </div>

    );
  };
};

PressReleaseDetail.propTypes = {
  id: PropTypes.string
};

function mapStateToProps(state) {
  return {prd: state.PressRelease.pressRelease.details};
}

export default connect(mapStateToProps, {fetchPressReleaseDetails})(PressReleaseDetail);;
