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
      return (<PressReleaseHeader title={Item.title} date={moment(Item.date).format('dddd, MMMM Do, YYYY')} status={Item.status} key={Item.id}/>);
    });
  }

  renderBody(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseBody body={Item.content} prid={Item.pr_number} contactinfo={Item.contact} key={Item.id}/>);
    });
  }

  renderimg(PR) {
    return _.map(PR, Item => {
      if (Item.image) {
        return (<img alt={Item.image.name} style={{
          width: '100%',
          margin: '5px 0px'
        }} src={`${Item.image.base_path}${Item.image.file} `} key={Item.image.image_id}/>);
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

function mapStateToProps(state) {
  return {prd: state.resources.pressRelease.details};
}
export default connect(mapStateToProps, {fetchPressReleaseDetails})(PressReleaseDetail);;
