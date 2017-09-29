import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {fetchPressReleaseDetails} from "../../actions";
import '../../content/styles/subSectionHeaderImage.css';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PressReleaseHeader from './pressReleaseHeader';
import moment from 'moment';

class PressReleaseDetail extends Component {

  componentDidMount() {
    const {id} = this.props
    this.props.fetchPressReleaseDetails(id);
  }

  renderHeader(PR) {
    return _.map(PR, Item => {
      return (<PressReleaseHeader title={Item.title.rendered} date={Item.date} status={Item.status_text}/>);
    });
  }

  render() {

    const {prd} = this.props;
    console.log('yeshu');
    console.log(prd);
    return (

      <div >
        {this.renderHeader(prd)}

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
