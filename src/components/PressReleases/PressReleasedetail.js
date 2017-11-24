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
import Header from '../shared/Breadcrumb/breadcrumb_container'

import moment from 'moment';

class PressReleaseDetail extends Component {

  componentDidMount() {
    const {slug} = this.props.match.params;
    this.props.fetchPressReleaseDetails(slug);
  }

  renderimg(sec) {
    if (sec.featured_image) {
      return (<img alt={sec.featured_image.name} style={{
        width: '100%',
        margin: '5px 0px'
      }} src={`${sec.featured_image.base_path}${sec.featured_image.file} `} key={sec.featured_image.image_id}/>);
    }

  }
  rendertop(sec) {
    return (
      <div key={_.random(0, 200, true)}>
        <div><PressReleaseHeader title={sec.header} date={moment(sec.date).format('dddd, MMMM Do, YYYY')} status={sec.status_text}/></div>
        <div>{this.renderimg(sec)}</div>
      </div>

    )
  }

  render() {

    const {prd} = this.props;
    return (
      <div >
        {this.renderPage(prd)}
      </div>

    );
  };

  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, cItems => {

        let banner;
        if (cItems.name != '') {
          banner = (
            <div key={_.random(0, 200, true)}>
              <Header breadCrumbList={cItems.breadcrumb}/>
            </div>
          )
        }

        var sections;
        if (cItems.sections) {
          sections = _.map(cItems.sections.sections, sec => {

            if (sec.card_data) {
              return (
                <div key={sec.name}><PressReleaseBody data={sec}/></div>
              )
            }
            return (
              <div key={sec.name}>{this.rendertop(sec)}</div>
            )
          })
        }

        return (
          <div key ={cItems.id}>
            <div>{banner}</div>
            <div className='container'>{sections}</div>
          </div>
        )
      });
    } else {
      return (
        <div className='loader container'></div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {prd: state.resources.pressRelease.details};
}
export default connect(mapStateToProps, {fetchPressReleaseDetails})(PressReleaseDetail);;
