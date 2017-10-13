import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from '../Breadcrumb/breadcrumb_container'
//Actions
import {fetchCardDetails} from "../../../actions";

//Sub Components
import Banner from '../banner'
import CardSec from './card_sec'

class cardDetailContainer extends Component {

  componentDidMount() {
    const {slug} = this.props.match.params;
    this.props.fetchCardDetails(slug);
  }

  render() {
    const {cardDetails} = this.props;
    return (
      <div>
        {this.renderPage(cardDetails)}
      </div>
    );
  };

  renderPage(cardDetails) {

    return _.map(cardDetails, cItems => {

      let banner;
      if (cItems.name != '') {
        banner = (
          <div key={cItems.id}>
            <Header title={cItems.title} breadCrumbList={cItems.breadcrumb} has_children={cItems.has_children}/>
          </div>
        )
      }

      var sections = _.map(cItems.sections.sections, sec => {

        return (
          <div key ={sec.id}>
            <div>
              <CardSec dataObject={sec}/></div>
          </div>
        );
      })

      return (
        <div key ={cItems.id}>

          <div>{banner}</div>
          <div >{sections}</div>
        </div>
      )
    });
  }
};

function mapStateToProps(state) {
  return {cardDetails: state.card};
}

export default connect(mapStateToProps, {fetchCardDetails})(cardDetailContainer);
